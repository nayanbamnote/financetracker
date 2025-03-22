import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_ENhcJbXW7w4u@ep-fragrant-dust-a84p2fd7-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql, { schema }); 
