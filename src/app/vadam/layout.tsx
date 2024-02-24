import { NavbarComponent } from "@/src/components/custom/NavbarComponent";
import { NAVBAR_OPTIONS } from "@/src/constants/navbarOptions";

export default function VadamRBALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavbarComponent options={NAVBAR_OPTIONS} />
      {children}
    </div>
  );
}
