"use client";

import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import { AccordionComponent } from "../../custom/AccordionComponent";
import { EditButton } from "./EditButton";
import { SectionWithAccordions } from "@/src/interfaces/rba/SectionRBADto";

interface Section {
  id: number;
  name: string;
}

interface Props {
  sectionWithAccordions: SectionWithAccordions[];
}

export const ShowSection = ({ sectionWithAccordions }: Props) => {
  return (
    <>
      <Card isBlurred className="">
        <CardHeader className="ml-4 mt-5 justify-between">
          Aquí un ejemplo de como se verá:
          <EditButton sectionsWithAccordions={sectionWithAccordions} />
        </CardHeader>
        <CardBody>
          <Tabs variant="underlined" color="warning" size="lg" className="mr-3">
            {sectionWithAccordions.map((section) => (
              <Tab key={section.id} title={section.name}>
                <AccordionComponent info={section.accordionRBA} />
              </Tab>
            ))}
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};
