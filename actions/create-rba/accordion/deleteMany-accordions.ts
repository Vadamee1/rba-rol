'use server'

import prisma from "@/prisma"


export const deleteAccordions = async (id: number) => {
  try {
    const accordionDelete = await prisma.accordionRBA.deleteMany({
      where: {
        sectionRBAId: id
      }
    })

    return {
      ok: true,
      message: 'Exito pa'
    }

  } catch (error) {
    console.log(error)
    throw new Error('No se logró.')
  }
}