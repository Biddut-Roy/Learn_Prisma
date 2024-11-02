import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  // find number of record
  const rCount = await prisma.user.count();

  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  console.log(avgAge, sumAge, countAge, minAge, maxAge);
};

main();
