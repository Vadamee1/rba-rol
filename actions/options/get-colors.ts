"use server";

import prisma from "@/prisma";

export const getColors = async () => {
  try {
    const colors = await prisma.color.findMany({
      select: {
        id: true,
        name: true,
        key: true,
      },
    });

    return colors;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
};
