import { AccordionComponent } from "@/src/components/custom/AccordionComponent";
import { ACCORDIONS_ROLEPLAY_VADAM } from "@/src/constants/accordion.dto";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About roleplay",
  description: "Acerca de la escritura",
  icons: "/images/icons/Luis-Miguel.png",
};

export default function RoleplayPage() {
  return (
    <>
      <div className="ml-2">
        <AccordionComponent info={ACCORDIONS_ROLEPLAY_VADAM} />
      </div>
    </>
  );
}
