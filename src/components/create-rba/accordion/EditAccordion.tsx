
import { Dispatch, SetStateAction } from "react"
import { EditForm } from "./EditForm"
import { SectionWithAccordions } from "@/src/interfaces/rba/SectionRBADto"

interface Props {
  section: SectionWithAccordions
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  onClose: () => void
}

export const EditAccordion = ({section, setSectionState, onClose}: Props) => {

  return (
    <>
      <div className="md:grid grid-cols-3 gap-4">
        {section.accordionRBA?.map((accordion) => (
          <div key={accordion.id} className="">
            <EditForm onClose={onClose} accordion={accordion} setSectionState={setSectionState} key={accordion.id} />
          </div>
        ))}
      </div>
    </>
  )
}
