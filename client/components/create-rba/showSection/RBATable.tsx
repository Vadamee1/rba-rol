'use client'

import { deleteSection } from "@/actions/create-rba/section/delet-section"
import { getSectionsWithAccordions } from "@/actions/create-rba/section/get-section"
import { Section, SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react"
import React, { Dispatch, SetStateAction } from "react"
import { IoTrashOutline } from "react-icons/io5"
import { EditSectionModal } from "../section/EditSectionModal"
import { OptionsAccordion } from "../accordion/OptionsAccordion"

interface Props {
  sections: SectionWithAccordions[]
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  setSectionSelectState: Dispatch<SetStateAction<Section[]>>
}

export const RBATable = ({sections, setSectionState, setSectionSelectState}: Props) => {

  const columns = [
    {name: "Nombre", uid: "name"},
    {name: "Acciones", uid: "actions"}
  ]

  async function handleDelete(id: number) {
    await deleteSection(id)
    setSectionState(await getSectionsWithAccordions(1))
  }

  const renderCell = React.useCallback((section: Section, columnKey: React.Key ) => {
    const cellValue = section[columnKey as keyof Section]

    switch (columnKey) {
      case "name":
        return (
          <p>{section.name}</p>
        )
      case "actions":
        return (
          <div className="relative flex items-center">
            <EditSectionModal section={section} setSectionSelectState={setSectionSelectState} setSectionState={setSectionState}/>
            <Tooltip content="Eliminar" color="danger">
              <Button isIconOnly color="danger" variant="light" onClick={() => handleDelete(section.id)}>
                <IoTrashOutline/>
              </Button>
            </Tooltip>
            <OptionsAccordion section={section} setSectionState={setSectionState}/>
          </div>
        )
      default:
        return cellValue
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Table aria-label="Secciones">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "end" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={sections} emptyContent="No hay datos para mostrar.">
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}