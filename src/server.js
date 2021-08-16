import { ApolloServer, gql } from 'apollo-server'
import { nanoid } from 'nanoid'
import { fetch, fetchAll } from './lib/postgres.js'
import jwt from './lib/jwt.js'
import sendEmail from './lib/sendEmail.js'

const typeDefs = gql`
    scalar Response

    type Mutation {
        register(username: String! age: Int! email: String!): Response!
    }

    type Query {
        users: String!
    }
`
const resolvers = {
    Mutation: {
        register: async (_, { username, age, email }) => {
            let password = nanoid(6)
            let user = await fetch('INSERT INTO users(username, age, email, password) VALUES ($1, $2, $3, $4) RETURNING user_id',
                username,
                age,
                email,
                password
            )

            sendEmail(email, password)

            let token = jwt.sign({ userId: user.user_id })
            return token
        }
    }
}

const app = new ApolloServer({ typeDefs, resolvers })

app.listen(3300).then(() => console.log('*3300'))