const { forwardTo } = require('prisma-binding')

async function createPost (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
  createPost
}