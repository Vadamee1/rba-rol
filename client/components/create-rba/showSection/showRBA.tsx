'use client'

import { Tab, Tabs } from "@nextui-org/react"
import { SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { AccordionComponent } from "../../custom/AccordionComponent"

interface Props {
  sectionWithAccordions: SectionWithAccordions[]
}

export const ShowRBA = ({sectionWithAccordions}: Props) => {

  return (
    <>
      <Tabs variant="underlined" color="warning" size="lg" className="mr-3">
        {sectionWithAccordions.map((section) => (
          <Tab key={section.id} title={section.name}>
            <AccordionComponent info={section.accordionRBA}/>
          </Tab>
        ))}
      </Tabs>
    </>
  )
}