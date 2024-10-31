import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const deletePost = async () => {
//   const deletedPost = await prisma.post.delete({
//     where: {
//       id: 10, // specify the ID of the post you want to delete
//     },
//   });
//   console.log("Post deleted:", deletedPost);
// };

const deletePost = async () => {
  const deletedMany = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
  console.log("Post deleted:", deletedMany);
};

deletePost();
