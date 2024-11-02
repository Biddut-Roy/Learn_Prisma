import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BatchTransactions = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "Nill",
      email: "Nill@example.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 40,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};

BatchTransactions();
