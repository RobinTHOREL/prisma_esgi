const { createPost, updatePost } = require('./Mutations/mutationPost')

const Mutation = {
    createPost,
    updatePost
}

module.exports = {
    Mutation
}