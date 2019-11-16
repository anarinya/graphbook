const typeDefinitions = `
  type Post {
    id: Int
    text: String
  }

  type RootQuery {
    # A list of all available posts.
    posts: [Post]
  }

  schema {
    query: RootQuery
  }
`

export default [typeDefinitions]