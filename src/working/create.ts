import { PrismaClient, userenum } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const newUser = await prisma.user.create({
  //     data: {
  //       username: "john_doe2",
  //       email: "john2@example.com",
  //       role: userenum.user,
  //     },
  //   });

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "this is a man...",
  //       userId: 2,
  //     },
  //   });

  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "ts Developer",
  //     },
  //   });

  const newPost = await prisma.post.create({
    data: {
      title: "New Blog Post",
      content: "This is the content of the blog post.",
      author: { connect: { id: 2 } },
      postcategory: {
        // create: {
        //   categoryId: 3,
        //   // category:
        //   //      { connect: { id: 1 } }
        // },
        create: [
          { category: { connect: { id: 1 } } },
          { category: { connect: { id: 3 } } },
          { category: { connect: { id: 2 } } },
        ],
      },
    },
    include: {
      postcategory: true,
    },
  });

  console.log("Post created:", newPost);
};

main();
