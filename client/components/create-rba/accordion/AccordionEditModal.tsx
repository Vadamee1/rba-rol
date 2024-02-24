import { Section, SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { Dispatch, SetStateAction } from "react"
import { EditAccordion } from "./EditAccordion"

interface Props {
  isOpen: boolean
  onClose: () => void
  section: SectionWithAccordions
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
}

export const AccordionEditModal = ({isOpen, onClose, section, setSectionState}: Props) => {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                Editar acordiones
              </ModalHeader>
              <ModalBody>
                <div className="xs:flex justify-center">
                  <EditAccordion onClose={onClose} section={section} setSectionState={setSectionState}/>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button 
                  className="w-36 text-white" 
                  variant="ghost" 
                  color="danger"
                  type="submit"
                  onPress={onClose}>
                    Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
