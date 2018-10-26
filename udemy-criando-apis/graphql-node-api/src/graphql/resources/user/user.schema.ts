const userTypes = `

  # User definition type
  type User{
    # comentário para o ID
    id: ID!
    name: String!
    email: String!
    photo: String
    createdAt: String!
    UpdatedAt: String!
  }

  input UserCreateInput {
    name: String!
    email: String!
    password: String!
  }

  input UserUpdatedInput{
    name: String!
    email: String!
    photo: String!
  }

  input UserUpdatePasswordInput {
    password: String!
  }

`;

const userQueries = `

  users(first: Int, offset: Int): [User!]!
  user(id: ID!) : User

`;

const userMutations = `

  createUser(input: UserCreateInput!): User
  updateUser(id: ID!, input: UserCreateInput!): User
  updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): User
  deleteUser (id: ID!) : Boolean

`;

export {
  userTypes,
  userQueries,
  userMutations
}