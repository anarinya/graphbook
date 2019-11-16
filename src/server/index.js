import express from 'express'
import path from 'path'
import helmet from 'helmet'
import cors from 'cors'
import compress from 'compression'

const app = express()
const root = path.join(__dirname, '../../')

// Setup Helmet to prevent XSS
app.use(helmet())

// Setup content security policy header
// Prevent images loading unless they are from AWS
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "*.amazonaws.com"]
  }
}))

// Set Referrer HTTP header only whe making requests on same host
// Stops internal routing or requests being exposed to internet
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

// Set Access-Control-Allow-Origin to */all by default
app.use(cors())

// Compress responses to increase performance
app.use(compress())

// Set directory locations
app.use('/', express.static(path.join(root, 'dist/client')))
app.use('/uploads', express.static(path.join(root, 'uploads')))



// Serve client app when index is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(root, '/dist/client/index.html'))
})

// Start server
app.listen(8000, () => console.log('Listening on port 8000.'))