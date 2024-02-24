'use server'

import { Accordion } from "@/client/interfaces/rba/AccordionRBADto"
import prisma from "@/prisma"

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