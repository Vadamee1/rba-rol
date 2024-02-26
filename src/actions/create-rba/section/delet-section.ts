'use server'

import prisma from "@/prisma"


export const deleteSection = async (id: number) => {
  try {
    const sectionDelete = await prisma.sectionRBA.delete({
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