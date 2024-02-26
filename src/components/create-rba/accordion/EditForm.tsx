
import { deleteAccordion } from "@/src/actions/create-rba/accordion/delete-accordion"
import { updateAccordion } from "@/src/actions/create-rba/accordion/update-accordion"
import { getSectionsWithAccordions } from "@/src/actions/create-rba/section/get-section"
import { Accordion } from "@/src/interfaces/rba/AccordionRBADto"
import { SectionWithAccordions } from "@/src/interfaces/rba/SectionRBADto"
import { Button, Input, Textarea } from "@nextui-org/react"
import { useFormik } from "formik"
import { Dispatch, SetStateAction } from "react"
import { IoTrainOutline } from "react-icons/io5"
import * as yup from "yup"


interface Props {
  accordion: Accordion
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>
  onClose: () => void
}

export const EditForm = ({accordion, setSectionState, onClose}: Props) => {

  const formik = useFormik({
    initialValues: {
      id: accordion.id,
      title: accordion.title,
      description: accordion.description
    },
    validationSchema: yup.object().shape({
      title: yup.string().required('Debes ingresar un título'),
      description: yup.string().required('Debes ingresar una descripción')
    }),
    onSubmit: async values => {
      updateAccordion(values)
      setSectionState(await getSectionsWithAccordions(1))
    }
  })

  async function handleDelete(id: number) {
    await deleteAccordion(id)
    setSectionState(await getSectionsWithAccordions(1))
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <div className="grid gap-4">
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
          <div className="flex gap-3 justify-end mt-4">
            <div className="">
              <Button isIconOnly color="danger" variant="ghost" onClick={() => handleDelete(accordion.id)}>
                <IoTrainOutline/>
              </Button>
            </div>
            <div className="">
              <Button
                className="w-36 text-white" 
                variant="ghost" 
                color="primary"
                type="submit"
              >
                Actualizar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
