// actions/register.ts
'use server';

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, name } = values;

  try {
    // 1. Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email already in use!" };
    }

    // 2. Hash the password (encrypt it)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create the user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: "Account created successfully!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};