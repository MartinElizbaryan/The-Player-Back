import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

import liverpool from "./seeds/teams/liverpool/_index.js"
import manCity from "./seeds/teams/mancity/_index.js"

async function main() {

  await prisma.team.upsert(liverpool)
  await prisma.team.upsert(manCity)

  await prisma.user.upsert({
      where: { email: "ibrahimovich@gmail.com" },
      update: {},
      create: {
          email: "ibrahimovich@gmail.com",
          username: "Ibrahimović",
          password: "12345678"
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