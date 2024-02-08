'use client'

import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react"
import { SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { AccordionComponent } from "../../custom/AccordionComponent"
import { IoCreateOutline } from "react-icons/io5"
import { EditButton } from "./EditButton"

interface Section {
  id: number
  name: string
}

interface Props {
  sectionWithAccordions: SectionWithAccordions[]
}

export const ShowSection = ({sectionWithAccordions}: Props) => {

  return (
    <>
      <Card isBlurred className="">
        <CardHeader className="ml-4 mt-5 justify-between">
          Aquí un ejemplo de como se verá:
          <EditButton sectionsWithAccordions={sectionWithAccordions}/>
        </CardHeader>
        <CardBody>
          <Tabs variant="underlined" color="warning" size="lg" className="mr-3">
            {sectionWithAccordions.map((section) => (
              <Tab key={section.id} title={section.name}>
                <AccordionComponent info={section.accordionRBA}/>
              </Tab>
            ))}
          </Tabs>
        </CardBody>
      </Card>
    </>
  )
}