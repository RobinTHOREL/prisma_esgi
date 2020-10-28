const { forwardTo } = require('prisma-binding')

async function createPost (parent, args, ctx, info) {
  //TODO : enlever le require sur le author dans la mutation // mettre le author grâce a son JWT sinon Not Authorized
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function updatePost (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
  createPost,
  updatePost
}