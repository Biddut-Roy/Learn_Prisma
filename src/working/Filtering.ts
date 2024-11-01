import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "New",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "New",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "New",
          },
        },
      ],
    },
  });

  const starWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "j", //endsWith and equals
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      posts: {
        include: {
          postcategory: true,
        },
      },
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};
Filtering();
