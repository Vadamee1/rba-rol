import prisma from "..";
import colors from "../data/colors";

export default async function ColorSeed() {
  try {
    await prisma.$transaction(
      colors.map(
        ({
          id,
          name,
          key
        }) => 
        prisma.color.upsert({
          create: {
            name,
            key
          },
          update: {},
          where: {id}
        })
      )
    )
  } catch (error) {
    console.log(error)
  }
}