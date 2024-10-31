import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationNormal = async () => {
  const posts = await prisma.post.findMany({
    skip: 5,
    take: 5,
    cursor: {
      id: 15,
    },
  });
  console.log(posts);
};

const getPaginatedPosts = async (page: number) => {
  const pageSize = 10;
  const posts = await prisma.post.findMany({
    skip: (page - 1) * pageSize, // skip records based on page number
    take: pageSize, // limit results to the page size
  });
  return posts;
};

// Usage
getPaginatedPosts(2); // Fetches posts for page 2
