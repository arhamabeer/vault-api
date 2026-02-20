import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

const adapter = new PrismaPg({
  url: process.env.DATABASE_URL as string,
});

export const prismaClient = new PrismaClient({ adapter });
