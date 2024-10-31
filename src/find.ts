import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find data
  const getAllFromDB = await prisma.post.findMany();

  //   get a single data findfirst and findFirstOrThrow
  const findfirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  //   find a unique data findUnique and findUniqueOrThrow
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 1,
    },
  });
  console.log(findUnique);
};

main();
