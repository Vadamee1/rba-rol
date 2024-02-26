'use server'

import prisma from "@/prisma"
import { Accordion } from "@/src/interfaces/rba/AccordionRBADto"

export const updateAccordion = async ({id, title, description}: Accordion) => {
  try {

    const accordion = prisma.accordionRBA.update({
      where: {id},
      data: {
        title,
        description,
      }
    })

    return accordion

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'No fue posible actualizar el acordión.'
    }
  }
}