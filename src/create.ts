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

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "title 1",
        content: "Content number 1",
        author: "jack baskar",
      },
      {
        title: "title 2",
        content: "Content number 2",
        author: "jack baska dr",
      },
      {
        title: "title 3",
        content: "Content number 3",
        author: "jack baskar q",
      },
      {
        title: "title 4",
        content: "Content number 4",
        author: "jack baskar g",
      },
    ],
  });

  console.log(createMany);
};

main();
