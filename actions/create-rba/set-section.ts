"use server";

import prisma from "@/prisma";
import { SectionRBADto } from "@/src/interfaces/rba/SectionRBADto";

export const setSection = async ({ name, userId }: SectionRBADto) => {
  try {
    const newSection = prisma.sectionRBA.create({
      data: {
        name,
        userId,
      },
    });

    return newSection;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No fue posible guardar la sección.",
    };
  }
};

export const getSection = async (userId: number) => {
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
            description: true,
          },
        },
      },
    });

    return sectionsWithAccordions;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
};
