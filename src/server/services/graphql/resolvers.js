const posts = [{
  id: 2,
  text: 'Lorem Ipsum',
  user: {
    avatar: '/uploads/avatar1.png',
    username: 'Test User'
  }
}, {
  id: 1,
  text: 'Hello',
  user: {
    avatar: '/uploads/avatar2.png',
    username: 'Test User 2'
  }
}]

const resolvers = {
  RootQuery: {
    posts(root, args, context) {
      return posts
    }
  }
}

export default resolvers