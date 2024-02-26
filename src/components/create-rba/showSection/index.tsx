"use client";

import { Card, CardBody, CardHeader, Tab, Tabs, Tooltip } from "@nextui-org/react"
import { EditOrDetailButton } from "./EditOrDetailButton"
import { Dispatch, SetStateAction, useState } from "react"
import { ShowRBA } from "./showRBA"
import { RBATable } from "./RBATable"
import { Section, SectionWithAccordions } from "@/src/interfaces/rba/SectionRBADto";

interface Props {
  sectionWithAccordions: SectionWithAccordions[]
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  setSectionSelectState: Dispatch<SetStateAction<Section[]>>
}

export const ShowSection = ({sectionWithAccordions, setSectionState, setSectionSelectState}: Props) => {

  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <Card isBlurred className="w-full">
        <CardHeader className="ml-4 mt-5 justify-between">
          Aquí un ejemplo de como se verá:
          <EditOrDetailButton sectionsWithAccordions={sectionWithAccordions} setSectionState={setSectionState} setIsEdit={setIsEdit} isEdit={isEdit}/>
        </CardHeader>
        <CardBody>
          {isEdit ? (
            <RBATable sections={sectionWithAccordions} />
          ) : (
            <div className="">
              <ShowRBA sectionWithAccordions={sectionWithAccordions}/>
            </div>
          )}
        </CardBody>
      </Card>
    </>
  );
};
