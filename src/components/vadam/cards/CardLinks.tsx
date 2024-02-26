import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { ListBoxInterestingPoints } from "../ListboxInterestingPoints"

export const CardLinks = () => {
  return (
    <>
      <Card className="">
        <CardHeader className="justify-center">
          <h1 className="text-xl">Interesting spots</h1>
        </CardHeader>
        <Divider/>
        <CardBody>
          <ListBoxInterestingPoints/>
        </CardBody>
      </Card>
    </>
  )
}