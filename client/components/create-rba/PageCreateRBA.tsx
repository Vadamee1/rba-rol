'use client'

import { SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { CreateAccordion } from "./accordion/CreateAccordion"
import { CreateSection } from "./section/CreateSection"
import { ShowSection } from "./showSection"
import { useState } from "react"

interface Section {
  id: number
  name: string
}

interface Props {
  sectionsWithAccordions: SectionWithAccordions[]
  sections: Section[]
}

export const PageCreateRBA = ({sectionsWithAccordions, sections}: Props) => {

  const [sectionsWithAccordionsState, setSectionState] = useState(sectionsWithAccordions)
  const [sectionsSelectState, setSectionsSelectState] = useState(sections)

  console.log(sectionsSelectState)

  return (
    <>
    <div className="flex flex-col w-full md:block basis-2/6">
      <div className="ml-5 mr-5 mb-5 ">
        <div className="">
          <CreateSection setSectionState={setSectionState} setSectionSelectState={setSectionsSelectState}/>
          <CreateAccordion 
            setSectionState={setSectionState} 
            sections={sectionsSelectState} />
        </div>
        <div className="md:hidden mt-5">
          <ShowSection sectionWithAccordions={sectionsWithAccordionsState}/>
        </div>
      </div>
    </div>
    <div className="hidden md:block basis-4/6 mr-7">
      <ShowSection sectionWithAccordions={sectionsWithAccordionsState}/>
    </div>
    </>
  )
}