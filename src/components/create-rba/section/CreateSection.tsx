"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { SectionForm } from "./SectionForm";
import { Dispatch, SetStateAction } from "react";
import {
  Section,
  SectionWithAccordions,
} from "@/src/interfaces/rba/SectionRBADto";

interface Props {
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>;
  setSectionSelectState: Dispatch<SetStateAction<Section[]>>;
}

export const CreateSection = ({
  setSectionState,
  setSectionSelectState,
}: Props) => {
  return (
    <>
      <Card isBlurred className="w-full mb-5">
        <CardHeader className="ml-5 mt-5">
          <p className="mr-4">
            Primero, genera las secciones en las que se dividirá:
          </p>
        </CardHeader>
        <Divider className="mt-3 mb-3" />
        <CardBody className="ml-4 mt-2 mb-3">
          <SectionForm
            setSectionState={setSectionState}
            setSectionSelectState={setSectionSelectState}
          />
        </CardBody>
      </Card>
    </>
  );
};
