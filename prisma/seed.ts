import prisma from ".";
import ColorSeed from "./seeds/ColorSeed";
import UserSeed from "./seeds/UserSeed";

async function main() {
  await UserSeed()
  await ColorSeed()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })