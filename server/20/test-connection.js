const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Connect explicitly (optional, but good for testing)
  await prisma.$connect()
  console.log('Connected to MongoDB via Prisma!')

  // Try to fetch first user
  const user = await prisma.user.findFirst()
  console.log('First user found:', user)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
