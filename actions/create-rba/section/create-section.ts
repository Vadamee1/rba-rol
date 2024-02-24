'use server'

import { SectionRBADto, SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import prisma from "@/prisma"

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