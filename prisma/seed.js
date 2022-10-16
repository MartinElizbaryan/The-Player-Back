import { PrismaClient } from "@prisma/client"
import { hashPassword } from "../src/helpers/auth.js"

const prisma = new PrismaClient()

import arsenal from "./seeds/teams/arsenal/_index.js"
import atleticoMadrid from "./seeds/teams/atletico_madrid/_index.js"
import barcelona from "./seeds/teams/barcelona/_index.js"
import chelsea from "./seeds/teams/chelsea/_index.js"
import dortmund from "./seeds/teams/dortmund/_index.js"
import inter from "./seeds/teams/inter/_index.js"
import juventus from "./seeds/teams/juventus/_index.js"
import liverpool from "./seeds/teams/liverpool/_index.js"
import manCity from "./seeds/teams/man_city/_index.js"
import manUnited from "./seeds/teams/man_united/_index.js"
import milan from "./seeds/teams/milan/_index.js"
import munichBayern from "./seeds/teams/munich_bayern/_index.js"
import psg from "./seeds/teams/psg/_index.js"
import realMadrid from "./seeds/teams/real_madrid/_index.js"
import roma from "./seeds/teams/roma/_index.js"
import tottenham from "./seeds/teams/tottenham/_index.js"
import valencia from "./seeds/teams/valencia/_index.js"


async function main() {
  // https://www.fifaindex.com/team/
  
  // Done
  await prisma.team.upsert(liverpool)   // 953
  await prisma.team.upsert(manCity)     // 961
  // ToDo
  await prisma.team.upsert(realMadrid)  // 111
  await prisma.team.upsert(barcelona)  // 111
  await prisma.team.upsert(chelsea)  // 111
  await prisma.team.upsert(manUnited)  // 111
  await prisma.team.upsert(tottenham)  // 111
  await prisma.team.upsert(arsenal)  // 111
  await prisma.team.upsert(dortmund)  // 111
  await prisma.team.upsert(inter)  // 111
  await prisma.team.upsert(juventus)  // 111
  await prisma.team.upsert(milan)  // 111
  await prisma.team.upsert(munichBayern)  // 111
  await prisma.team.upsert(roma)  // 111
  await prisma.team.upsert(valencia)  // 111
  await prisma.team.upsert(psg)  // 111
  await prisma.team.upsert(atleticoMadrid)  // 111

  await prisma.user.upsert({
      where: { email: "ibra@gmail.com" },
      update: {},
      create: {
          email: "ibra@gmail.com",
          username: "Ibrahimović",
          password: await hashPassword("qweqweqwe")
      },
  })
}




main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })