import { env } from "node:process";

export const jwtConstants = {
    secret: process.env.mysecret,
  };