import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

async function main() {
  const actions = [];
  // TODO:　環境がlocal or development以外は実行しない

  //全データを破棄
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});
  const uuid1 = uuidv4();
  const uuid2 = uuidv4();
  const uuid3 = uuidv4();
  const post1 = uuidv4();
  const post2 = uuidv4();
  const post3 = uuidv4();

  actions.push(
    prisma.user.createMany({
      data: [
        {
          id: uuid1,
          name: "pasona1",
          email: "pasona1@fab.pasona.tech",
        },
        {
          id: uuid2,
          name: "pasona2",
          email: "pasona2@fab.pasona.tech",
        },
        {
          id: uuid3,
          name: "pasona3",
          email: "pasona3@fab.pasona.tech",
        },
      ],
    })
  );
  actions.push(
    prisma.post.createMany({
      data: [
        {
          id: post1,
          title: "test1",
          body: "body1",
          authorId: uuid1,
        },
        {
          id: post2,
          title: "test1-2",
          body: "body1-2",
          authorId: uuid1,
        },
        {
          id: post3,
          title: "test2",
          body: "body2",
          authorId: uuid2,
        },
      ],
    })
  );
  // トランザクションで実行（この場合、それぞれの実行結果が配列に入って返ってくる）
  await prisma.$transaction(actions);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
