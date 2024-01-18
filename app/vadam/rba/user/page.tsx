import { AccordionComponent } from "@/client/components/custom/AccordionComponent";
import { ACCORDIONS_USER_VADAM } from "@/client/constants/accordion.dto";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About user',
  description: 'Acerca del usuario',
  icons: '/images/icons/Luis-Miguel.png'
}

export default function UserPage () {
  return (
    <>
      <div className="ml-2">
        <AccordionComponent info={ACCORDIONS_USER_VADAM}/>
      </div>
    </>
  )
}