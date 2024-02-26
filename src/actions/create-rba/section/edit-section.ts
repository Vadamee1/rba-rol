'use server'

import prisma from "@/prisma"
import { Section } from "@/src/interfaces/rba/SectionRBADto"


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