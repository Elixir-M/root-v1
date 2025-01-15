// test-supabase.js
import { PrismaClient } from '@prisma/client';

const supabaseUrl = "postgresql://postgres:ypKeknbBnuU51tcN@db.ewriqxemjmqwetsyhmky.supabase.co:5432/postgres";

// Initialize Prisma with Supabase URL
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: supabaseUrl
    }
  }
});

async function testSupabaseConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Try to connect
    await prisma.$connect();
    console.log('Connected to Supabase successfully');
    
    // Try a simple query
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log('Query executed successfully');
    
    return true;
  } catch (error) {
    console.error('Connection failed');
    console.error('Error details:', {
      message: error.message,
      code: error.code
    });
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

testSupabaseConnection()
  .catch(console.error)
  .finally(() => process.exit(0));