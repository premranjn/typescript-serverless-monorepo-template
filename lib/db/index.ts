import { PrismaClient } from "./prisma/generated/client";

import { config } from "dotenv";
config();

export const prisma = new PrismaClient();
