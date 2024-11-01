import { PrismaClient, userenum } from "@prisma/client";

const prisma = new PrismaClient();

const queries = async () => {
  // fluent api
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     })
  //     .posts();
  //   console.log(result);

  // fluent api

  //   const results = await prisma.user.findUnique({
  //     where: {
  //       id: 2,
  //     },

  //     include: {
  //       posts: true,
  //     },
  //   });
  //   console.log(results);

  const publishedPostUser = await prisma.user.findMany({
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUser, { depth: Infinity });
};

queries();
