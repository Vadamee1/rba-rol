'use client'

import { SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Button, Tooltip } from "@nextui-org/react"
import { IoCreateOutline, IoEyeOutline } from "react-icons/io5"
import { Dispatch, SetStateAction, useState } from "react"

interface Props {
  sectionsWithAccordions: SectionWithAccordions[]
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  setIsEdit: Dispatch<SetStateAction<boolean>>
  isEdit: boolean
}

export const EditOrDetailButton = ({setIsEdit, isEdit}: Props) => {

  const [isOpen, setIsOpen] = useState(false)
  const content = isEdit ? 'Observar' : 'Editar'

  function handleClick () {
    isEdit ? setIsEdit(false) : setIsEdit(true)
  }

  return (
    <>
      <Tooltip content={content} color="primary" placement="left" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <Button isIconOnly color="primary" variant="solid" onPress={() => handleClick()} className="mr-7 items-center">
          {isEdit ? (
            <IoEyeOutline/>
            ) : (
              <IoCreateOutline/>
            )}
        </Button>
      </Tooltip>
    </>
  )
}