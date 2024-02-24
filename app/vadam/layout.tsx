import { NavbarComponent } from "@/client/components/custom/NavbarComponent";
import { NAVBAR_OPTIONS } from "@/client/constants/navbarOptions";
import { Divider } from "@nextui-org/react";

export default function VadamRBALayout({ children }: {
  children: React.ReactNode
}) {

  return (
    <div className="h-full">
      <NavbarComponent options={NAVBAR_OPTIONS}/>
      <Divider/>
      {children} 
    </div>
  )
}