import { CardType } from "@/client/interfaces/custom/card"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"

interface Props {
  card: CardType
}

export const CardComponent = ({ card }: Props) => {
  return (
    <>
      <Card>
        <CardHeader className={card.header?.className}>
        </CardHeader>
        <CardBody>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </>
  )
}