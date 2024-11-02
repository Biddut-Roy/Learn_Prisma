import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchAllPosts = async () => {
  //   const result = await prisma.$queryRaw`SELECT * FROM "posts"`;

  //   console.log(result);

  await prisma.$queryRaw`TRUNCATE TABLE "categorys" CASCADE `;
};

fetchAllPosts();
