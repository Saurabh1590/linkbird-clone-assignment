import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './index';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

async function main() {
  console.log('Running migrations...');
  await migrate(db, {
    migrationsFolder: 'drizzle',
  });

  console.log('Migrations finished successfully!');
  
  process.exit(0);
}

main().catch((err) => {
  console.error('Migration failed with error:');
  console.error(err);
  process.exit(1);
});