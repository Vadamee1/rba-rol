'use server'

import prisma from "@/prisma"
import { SectionRBADto } from "@/src/interfaces/rba/SectionRBADto"

export const createSection = async({name, userId}: SectionRBADto) => {
  try {
    
    const newSection = prisma.sectionRBA.create({
      data: {
        name,
        userId
      }
    })

    return newSection

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'No fue posible guardar la sección.'
    }
  }
}