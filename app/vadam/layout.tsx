import { NavbarComponent } from "@/client/components/custom/NavbarComponent";
import { NAVBAR_OPTIONS } from "@/client/constants/navbarOptions";

export default function VadamRBALayout({ children }: {
  children: React.ReactNode
}) {

  return (
    <div className="">
      <NavbarComponent options={NAVBAR_OPTIONS}/>
      {children} 
    </div>
  )
}