"use server";

import prisma from "@/prisma";
import { AccordionRBADto } from "@/src/interfaces/rba/AccordionRBADto";

export const setAccordion = async ({
  title,
  description,
  sectionRBAId,
}: AccordionRBADto) => {
  try {
    const newAccordion = prisma.accordionRBA.create({
      data: {
        title,
        description,
        sectionRBAId: Number(sectionRBAId),
      },
    });

    return newAccordion;
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No fue posible guardar el acordión.",
    };
  }
};

export const getAccordion = async (sectionRBAId: number) => {
  try {
    const accordions = prisma.accordionRBA.findMany({
      where: { sectionRBAId },
      select: {
        id: true,
        title: true,
        description: true,
      },
    });

    return accordions;
  } catch (error) {
    console.log(error);
    throw new Error("No se logró.");
  }
};
