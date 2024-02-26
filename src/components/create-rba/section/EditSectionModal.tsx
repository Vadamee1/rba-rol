
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip, useDisclosure } from "@nextui-org/react"
import { IoPencilSharp } from "react-icons/io5"
import { EditSectionForm } from "./EditSectionForm"
import { Dispatch, SetStateAction } from "react"
import { Section, SectionWithAccordions } from "@/src/interfaces/rba/SectionRBADto"

interface Props {
  section: Section
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  setSectionSelectState: Dispatch<SetStateAction<Section[]>>
}

export const EditSectionModal = ({section, setSectionSelectState, setSectionState}: Props) => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Tooltip content="Editar" color="warning">
        <Button isIconOnly color="warning" variant="light" onPress={() => onOpen()}>
          <IoPencilSharp/>
        </Button>
      </Tooltip>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <p>Elimina las secciones:</p>
              </ModalHeader>
              <ModalBody>
                <EditSectionForm
                  section={section}
                  setSectionSelectState={setSectionSelectState}
                  setSectionState={setSectionState}
                  onClose={onClose}/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
