import { config } from "dotenv";

import { PrismaClient } from "./generated/client";
config();

export const prisma = new PrismaClient();
