"use server";

import prisma from "@/prisma"

export const getSection = async(userId: number) => {
  try {
    const sections = prisma.sectionRBA.findMany({
      where: { userId: userId },
      select: {
        id: true,
        name: true,
      },
    });

    return sections;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
};

export const getSectionsWithAccordions = async (userId: number) => {
  try {
    const sectionsWithAccordions = prisma.sectionRBA.findMany({
      where: { userId: userId },
      select: {
        id: true,
        name: true,
        accordionRBA: {
          select: {
            id: true,
            title: true,
            description: true
          },
          orderBy: {createdAt: "asc"}
        }
      },
      orderBy: {createdAt: "asc"}
    })

    return sectionsWithAccordions
    
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
};
