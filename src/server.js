import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`

`
const resolvers = {

}

const app = new ApolloServer({ typeDefs, resolvers })

app.listen(3300),then(() => console.log('*3300'))