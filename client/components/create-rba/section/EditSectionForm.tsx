'use client'

import { updateSection } from "@/actions/create-rba/section/edit-section"
import { getSection, getSectionsWithAccordions } from "@/actions/create-rba/section/get-section"
import { Section, SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Button, Input } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import * as yup from "yup"

interface Props {
  section: Section
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  setSectionSelectState: Dispatch<SetStateAction<Section[]>>
  onClose: any
}

export const EditSectionForm = ({section, setSectionSelectState, setSectionState, onClose}: Props) => {

  const formik = useFormik({
    initialValues: {
      id: section.id,
      name: section.name
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Debes ingresar un nombre')
    }),
    onSubmit: async values => {
      updateSection(values)
      setSectionSelectState(await getSection(1))
      setSectionState(await getSectionsWithAccordions(1))
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-5">
          <Input
            variant='bordered' 
            label="Nombre" 
            type="text" 
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            errorMessage={formik.errors.name}
          />
        </div>
        <div className="flex justify-end mt-10 mb-7">
          <Button 
            className="w-36 text-white" 
            variant="ghost" 
            color="primary"
            type="submit"
            onPress={onClose}>
              Actualizar
          </Button>
        </div>
      </form>
    </>
  )
}