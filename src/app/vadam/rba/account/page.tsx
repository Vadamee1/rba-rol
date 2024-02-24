import { AccordionComponent } from "@/src/components/custom/AccordionComponent";
import { ACCORDIONS_ACCOUNT_VADAM } from "@/src/constants/accordion.dto";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About account",
  description: "Acerca de la cuenta",
  icons: "/images/icons/Luis-Miguel.png",
};

export default function AccountPage() {
  return (
    <>
      <div className="ml-2">
        <AccordionComponent info={ACCORDIONS_ACCOUNT_VADAM} />
      </div>
    </>
  );
}
