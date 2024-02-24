'use server'

import prisma from "@/prisma"


export const deleteAccordion = async (id: number) => {
  try {
    const accordionDelete = await prisma.accordionRBA.delete({
      where: {
       id
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