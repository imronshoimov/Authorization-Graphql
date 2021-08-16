import { ApolloServer, gql } from 'apollo-server'
import { nanoid } from 'nanoid'
import { fetch, fetchAll } from './lib/postgres.js'

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
        register: (_, { username, age, email }) => {
            let password = nanoid(6)
            await fetch('INSERT INTO users(username, age, email, password) VALUES ($1, $2, $3, $4)',
                username,
                age,
                email,
                password
            )
        }
    }
}

const app = new ApolloServer({ typeDefs, resolvers })

app.listen(3300).then(() => console.log('*3300'))