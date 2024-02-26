"use client";

import { AccordionType } from "@/src/interfaces/custom/accordion";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface Props {
  info: AccordionType[];
}

export const AccordionComponent = ({ info }: Props) => {
  return (
    <>
      <Accordion variant="bordered">
        {info.map((accordion) => (
          <AccordionItem key={accordion.id} title={accordion.title}>
            {accordion.description}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
