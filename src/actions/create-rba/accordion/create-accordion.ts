'use server'

import { AccordionRBADto } from "@/src/interfaces/rba/AccordionRBADto"
import prisma from "@/prisma"

export const createAccordion = async ({title, description, sectionRBAId}: AccordionRBADto) => {
  try {

    const newAccordion = prisma.accordionRBA.create({
      data: {
        title,
        description,
        sectionRBAId: Number(sectionRBAId)
      }
    })

    return newAccordion

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'No fue posible guardar el acordión.'
    }
  }
}