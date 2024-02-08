'use client'

import { getSection, getSectionsWithAccordions, setSection } from "@/actions/create-rba/set-section"
import { Section, SectionWithAccordions } from "@/client/interfaces/rba/SectionRBADto"
import { Button, Input } from "@nextui-org/react"
import { useFormik } from "formik"
import * as yup from "yup"
import { Dispatch, SetStateAction } from "react"

interface Props {
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  setSectionSelectState: Dispatch<SetStateAction<Section[]>>
}

export const SectionForm = ({setSectionState, setSectionSelectState}: Props) => {

  const formik = useFormik({
    initialValues: {
      name: "",
      userId: 1
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Debes ingresar un nombre')
    }),
    onSubmit: async values => {
      setSection(values)
      setSectionSelectState(await getSection(1))
      setSectionState(await getSectionsWithAccordions(1))
      values.name = ""
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="flex flex-col gap-7 mr-8">
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
    <div className="flex justify-end mt-7 mr-8">
      <Button className="w-36 text-white" variant="ghost" color="primary" type="submit">
        Crear
      </Button>
    </div>
  </form>
  )
}