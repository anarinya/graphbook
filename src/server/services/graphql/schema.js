const typeDefinitions = `
type User {
  id: Int
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

  input ChatInput {
    users: [Int]
  }

  input MessageInput {
    text: String!
    chatId: Int!
  }

  type RootQuery {
    # All available posts.
    posts: [Post]
    # A single chat.
    chat(chatId: Int): Chat
    # All available chats.
    chats: [Chat]
  }

  type RootMutation {
    # Add a new post
    addPost(post: PostInput!): Post
    # Add a new chat
    addChat(chat: ChatInput!): Chat
    # Add a new message
    addMessage(message: MessageInput!): Message
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`

export default [typeDefinitions]