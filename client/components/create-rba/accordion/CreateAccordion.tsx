import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { SectionRBA } from "@prisma/client"
import { AccordionForm } from "./AccordionForm"
import { Section, SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Dispatch, SetStateAction } from "react"

interface Props {
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  sections: Section[]
}

export const CreateAccordion = ({setSectionState, sections}: Props) => {

  return (
    <>
      <Card isBlurred className="w-full">
        <CardHeader className="ml-5 mt-5">
          Después, crea el contenido de la sección:
        </CardHeader>
        <Divider className="mt-3 mb-3"/>
        <CardBody>
          <AccordionForm setSectionState={setSectionState} sections={sections}/>
        </CardBody>
      </Card>
    </>
  )
}