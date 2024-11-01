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
        startsWith: "j",
      },
    },
  });
  console.log(starWith);
};
Filtering();
