import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Check a data set",
  //       content: "This a a Content",
  //       author: "jack",
  //     },
  //   });
  //   console.log(result);
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
