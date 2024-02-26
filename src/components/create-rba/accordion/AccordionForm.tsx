"use client";

import { getSectionsWithAccordions } from "@/src/actions/create-rba/section/get-section";
import { setAccordion } from "@/src/actions/create-rba/set-accordion";
import {
  Section,
  SectionWithAccordions,
} from "@/src/interfaces/rba/SectionRBADto";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface Props {
  setSectionState: Dispatch<SetStateAction<SectionWithAccordions[]>>;
  sections: Section[];
}

export const AccordionForm = ({ setSectionState, sections }: Props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      sectionRBAId: 0,
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Debes ingresar un título"),
      description: yup.string().required("Debes ingresar una descripción"),
      sectionRBAId: yup.string().matches(/[1-9]/, "Selecciona una opción"),
    }),
    onSubmit: async (values) => {
      setAccordion(values);
      setSectionState(await getSectionsWithAccordions(1));
      (values.title = ""), (values.description = "");
      values.sectionRBAId = 0;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="ml-5 gap-7">
        <div className="flex flex-col gap-7 mr-4 mt-2">
          <Select
            variant="bordered"
            label="Selecciona una sección"
            items={sections}
            name="sectionRBAId"
            onChange={formik.handleChange}
            selectedKeys={[formik.values.sectionRBAId]}
            errorMessage={formik.errors.sectionRBAId}
          >
            {sections.map((section) => (
              <SelectItem key={section.id} value={formik.values.sectionRBAId}>
                {section.name}
              </SelectItem>
            ))}
          </Select>
          <Input
            variant="bordered"
            label="Título"
            type="text"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            errorMessage={formik.errors.title}
          />
          <Input
            variant="bordered"
            label="Descripción"
            type="text"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            errorMessage={formik.errors.description}
          />
        </div>
        <div className="flex justify-end mt-7 mr-4 mb-5">
          <Button
            className="w-36 text-white"
            variant="ghost"
            color="primary"
            type="submit"
          >
            Crear
          </Button>
        </div>
      </div>
    </form>
  );
};
