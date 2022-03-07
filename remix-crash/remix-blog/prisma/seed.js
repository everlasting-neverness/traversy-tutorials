const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map(post => {
      return db.post.create({ data: post });
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