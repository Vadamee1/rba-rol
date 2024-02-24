'use server'

import { Section } from "@/client/interfaces/rba/SectionRBADto"
import prisma from "@/prisma"


export const updateSection = async ({id, name}: Section) => {
  try {
    const sectionUpdate = await prisma.sectionRBA.update({
      where: {
        id
      },
      data: {
        name
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