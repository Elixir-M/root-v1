// test-db.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('Database connection successful!')
    const result = await prisma.card.findMany()
    console.log('Query result:', result)
  } catch (e) {
    console.error('Database connection failed:', e)
  } finally {
    await prisma.$disconnect()
  }
}

main()