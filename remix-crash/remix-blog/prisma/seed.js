const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const john = await prisma.user.create({
    data: {
      username: "john",
      passwordHash: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u"
    }
  })

  await Promise.all(
    getPosts().map(post => {
      const data = { userId: john.id, ...post  }
      return prisma.post.create({ data });
    })
  )
}

seed();

function getPosts() {
  return [
    {
      title: "Title 1",
      body: "body 1",
    },
    {
      title: "Title 2",
      body: "body 2",
    },
    {
      title: "Title 3",
      body: "body 3",
    },
    {
      title: "Title 4",
      body: "body 4",
    },
  ]
}