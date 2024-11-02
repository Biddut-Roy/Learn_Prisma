import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("query:", e.query);
  console.log("Duration:", e.duration);
  console.log("Time:", e.timestamp);
});
const main = async () => {
  const getData = await prisma.post.findMany();
};

main();
