'use client'

import { AccordionType } from "@/client/interfaces/custom/accordion"
import { Accordion, AccordionItem } from "@nextui-org/react"

interface Props {
  info: AccordionType[]
}

export const AccordionComponent = ({ info }: Props) => {
  return (
    <>
      <Accordion variant="bordered" >
        {info.map((accordion) => (
          <AccordionItem key={accordion.key} title={accordion.title}>{accordion.content}</AccordionItem>
        ))}
      </Accordion>
    </>
  )
}