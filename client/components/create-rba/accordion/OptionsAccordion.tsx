import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, cn, useDisclosure } from "@nextui-org/react"
import { IoEllipsisVertical, IoPencilSharp, IoTrashOutline } from "react-icons/io5"
import { AccordionEditModal } from "./AccordionEditModal"
import { SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Dispatch, SetStateAction } from "react"
import { getSectionsWithAccordions } from "@/actions/create-rba/section/get-section"
import { deleteAccordions } from "@/actions/create-rba/accordion/deleteMany-accordions"

interface Props {
  section: any
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const OptionsAccordion = ({section, setSectionState}: Props) => {

  const editModal = useDisclosure()
  const handleDeleteAccordions = async (id: any) => {
    deleteAccordions(id)
    setSectionState(await getSectionsWithAccordions(1))
  }
  
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly color="secondary" variant="light">
            <IoEllipsisVertical/>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Options" onAction={(key) => {
          if(key === 'edit') {
            editModal.onOpen()
          }
          if(key === 'delete') {
            handleDeleteAccordions(section.id)
          }
        }}>
          <DropdownItem key="edit" startContent={(<IoPencilSharp className={cn("text-warning")}/>)}>
            Editar acordeones
          </DropdownItem>
          <DropdownItem key="delete" startContent={(<IoTrashOutline className={cn("text-danger")}/>)}>
            Eliminar acordeones
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <AccordionEditModal
       isOpen={editModal.isOpen}
       onClose={editModal.onClose}
       section={section}
       setSectionState={setSectionState}
      />
    </>
  )
}