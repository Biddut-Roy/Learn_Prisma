import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const Group = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      title: true,
    },
    having: {
      authorId: {
        _sum: {
          gt: 1,
        },
      },
    },
  });
  console.log(Group);
};

groupBy();
