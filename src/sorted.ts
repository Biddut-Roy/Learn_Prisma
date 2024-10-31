import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sorted = async () => {
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
  });
  console.log(sortedData);
};

sorted();
