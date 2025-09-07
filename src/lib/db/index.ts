import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

// Create a new client instance from the pg library
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// Connect the client
client.connect();

export const db = drizzle(client);