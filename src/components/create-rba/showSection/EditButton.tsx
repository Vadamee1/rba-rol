"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoCreateOutline } from "react-icons/io5";
import { RBATable } from "./RBATable";
import { SectionWithAccordions } from "@/src/interfaces/rba/SectionRBADto";

interface Props {
  sectionsWithAccordions: SectionWithAccordions[];
}

export const EditButton = ({ sectionsWithAccordions }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        color="primary"
        variant="solid"
        onPress={() => onOpen()}
        className="mr-7 items-center"
      >
        <IoCreateOutline />
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <p>Elimina las Tabs:</p>
              </ModalHeader>
              <ModalBody>
                <RBATable sections={sectionsWithAccordions} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
