'use server'

import prisma from "@/prisma"

export const getAccordion = async (sectionRBAId: number) => {
  try {
    
    const accordions = prisma.accordionRBA.findMany({
      where: { sectionRBAId },
      select: {
        id: true,
        title: true,
        description: true
      }
    })

    return accordions

  } catch (error) {
    console.log(error)
    throw new Error('No se logró.')
  }
}