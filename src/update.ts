import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const update = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 7,
  //     },
  //     data: {
  //       title: "title 7",
  //       content: "Content number 7",
  //       author: "jack mack",
  //     },
  //   });
  //   console.log(singleUpdate);

  const UpdateMany = await prisma.post.updateMany({
    where: {
      title: "title 3",
    },
    data: {
      published: true,
    },
  });
  console.log(UpdateMany);
};

update();
