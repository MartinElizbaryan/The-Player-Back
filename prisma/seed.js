import { PrismaClient } from "@prisma/client"
import { hashPassword } from "../src/helpers/auth.js"

const prisma = new PrismaClient()

import liverpool from "./seeds/teams/liverpool/_index.js"
import manCity from "./seeds/teams/mancity/_index.js"

async function main() {

  await prisma.team.upsert(liverpool)
  await prisma.team.upsert(manCity)

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