const typeDefinitions = `
type User {
  avatar: String
  username: String
}

  type Post {
    id: Int
    text: String
    user: User
  }

  type Message {
    id: Int
    text: String
    chat: Chat
    user: User
  }

  type Chat {
    id: Int
    messages: [Message]
    users: [User]
  }

  input PostInput {
    text: String!
  }

  input UserInput {
    username: String!
    avatar: String!
  }

  type RootQuery {
    # All available posts.
    posts: [Post]
    # All available chats.
    chats: [Chat]
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