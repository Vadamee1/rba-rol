'use client'

import { createAccordion } from "@/actions/create-rba/accordion/create-accordion"
import { getSectionsWithAccordions } from "@/actions/create-rba/section/get-section"
import { Section, SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import * as yup from "yup"

interface Props {
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  sections: Section[]
}

export const AccordionForm = ({setSectionState, sections}: Props) => {
  
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      sectionRBAId: 0
    },
    validationSchema: yup.object().shape({
      title: yup.string().required('Debes ingresar un título'),
      description: yup.string().required('Debes ingresar una descripción'),
      sectionRBAId: yup.string().matches(/[1-9]/, 'Selecciona una opción')
    }),
    onSubmit: async values => {
      createAccordion(values)
      setSectionState(await getSectionsWithAccordions(1))
      values.title = "",
      values.description = ""
      values.sectionRBAId = 0
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="ml-5 gap-7">
        <div className="flex flex-col gap-7 mr-4 mt-2">
          <Select 
            variant="bordered" 
            label='Selecciona una sección' 
            items={sections} 
            name="sectionRBAId" 
            onChange={formik.handleChange}
            errorMessage={formik.errors.sectionRBAId}
            value={formik.values.sectionRBAId}
          >
            {sections.map( (section) => (
            <SelectItem key={section.id} value={section.id} >{section.name}</SelectItem>
            ))}
          </Select>
          <Input
            variant='bordered' 
            label="Título" 
            type="text" 
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            errorMessage={formik.errors.title}
          />
          <Textarea
            variant='bordered' 
            label="Descripción" 
            type="text" 
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            errorMessage={formik.errors.description}
          />
        </div>
        <div className="flex justify-end mt-7 mr-4 mb-5">
          <Button className="w-36 text-white" variant="ghost" color="primary" type="submit">
            Crear
          </Button>
        </div>
      </div>
    </form>
  )
}