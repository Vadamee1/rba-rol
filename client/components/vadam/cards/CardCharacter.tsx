import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import Link from "next/link"

interface Props {
  image: {
    alt: string
    src: string
  }
}

export const CardCharacter = ({image}: Props) => {
  return (
    <div className="mb-2 ">
      <Card isFooterBlurred className="w-full h-full col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-white/60 uppercase font-bold"> MAIN CHARACTER</p>
        </CardHeader>
        <Image
          removeWrapper
          className="z-0 w-full h-full scale-130 -translate-y-6 object-cover"
          alt={image.alt} 
          src={image.src}
        />
        <CardFooter className="absolute bg-black/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p>Available character sheet.</p>
          </div>
            <Button 
              href="https://www.facebook.com/photo/?fbid=122118781010156070&set=a.122111320676156070"
              as={Link}
              color="danger" 
              variant="ghost" 
              radius="full" 
              size="md">More details!
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}