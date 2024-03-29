import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { AccordionForm } from "./AccordionForm";
import { Dispatch, SetStateAction } from "react";
import {
  Section,
  SectionWithAccordions,
} from "@/src/interfaces/rba/SectionRBADto";

interface Props {
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>;
  sections: Section[];
}

export const CreateAccordion = ({ setSectionState, sections }: Props) => {
  return (
    <>
      <Card isBlurred className="w-full">
        <CardHeader className="ml-5 mt-5">
          Después, crea el contenido de la sección:
        </CardHeader>
        <Divider className="mt-3 mb-3" />
        <CardBody>
          <AccordionForm
            setSectionState={setSectionState}
            sections={sections}
          />
        </CardBody>
      </Card>
    </>
  );
};
