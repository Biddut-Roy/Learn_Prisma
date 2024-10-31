import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const upsertPost = async () => {
  try {
    const post = await prisma.post.upsert({
      where: {
        id: 7, // specify the unique identifier for the post
      },
      update: {
        title: "Nill ROy",
        content: "content for post 7",
        author: "Updated Author",
      },
      select: {
        title: true,
      },
      create: {
        id: 7, // ensure the same ID for consistency
        title: "New Title",
        content: "Content for a new post",
        author: "New Author",
      },
    });
    console.log("Upserted post:", post);
  } catch (error) {
    console.error("Error during upsert:", error);
  } finally {
    await prisma.$disconnect();
  }
};

upsertPost();
