import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const InteractiveTransactions = async () => {
  const result = await prisma.$transaction(async (ts) => {
    const getAll = await ts.post.findMany();

    const updateUser = await ts.user.update({
      where: { id: 4 },
      data: { age: 40 },
    });

    return { getAll, updateUser };
  });

  console.log(result);
};

InteractiveTransactions();
