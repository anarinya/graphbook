const typeDefinitions = `
  type Post {
    id: Int
    text: String
    user: User
  }

  type User {
    avatar: String
    username: String
  }

  input PostInput {
    text: String!
  }

  input UserInput {
    username: String!
    avatar: String!
  }

  type RootQuery {
    # A list of all available posts.
    posts: [Post]
  }

  type RootMutation {
    addPost(post: PostInput!): Post
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`

export default [typeDefinitions]