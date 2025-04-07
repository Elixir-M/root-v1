const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  connectionString: 'postgresql://postgres:i3KU7R72mMYPbmvh@db.ewriqxemjmqwetsyhmky.supabase.co:5432/postgres'
});

const sql = fs.readFileSync('convert_services.sql', 'utf8');

async function executeMigration() {
  const client = await pool.connect();
  try {
    await client.query(sql);
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Error executing migration:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

executeMigration();