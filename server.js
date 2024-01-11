const express = require('express');
const path = require('path');
const {json} = require('body-parser')
const {ApolloServer} = require('@apollo/server')
const {expressMiddleware} = require('@apollo/server/express4')
const {loadFilesSync} = require('@graphql-tools/load-files')
const {makeExecutableSchema} = require('@graphql-tools/schema')



const typesArray =  loadFilesSync('**/*',{
    extensions: ['graphql']
})
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'))

async function startApolloServer(){
    const app = express()

    const schema = makeExecutableSchema({
        typeDefs:typesArray,
        resolvers:resolversArray
    })

    const server = new ApolloServer({
        schema
    })
    await server.start()
    
    app.use('/graphql',json(), expressMiddleware(server))

    app.listen(4000, () => {
        console.log('Running GraphQL server...')
    })
}

startApolloServer()

 
