'use client'

import { CardCharacter } from "@/client/components/vadam/cards/CardCharacter";
import { NavbarComponent } from "@/client/components/custom/NavbarComponent";
import { ACCOUNT_IMAGE } from "@/client/constants/image.dto";
import { NAVBAR_OPTIONS } from "@/client/constants/navbarOptions";
import { ListBoxInterestingPoints } from "@/client/components/vadam/ListboxInterestingPoints";

export default function VadamRBALayout({ children }: {
  children: React.ReactNode
}) {

  return (
    <div>
      <NavbarComponent options={NAVBAR_OPTIONS}/>
      <div className="flex flex-row">
        <div className="w-full lg:basis-4/6">
          {children}
          <div className="ml-2 mt-3 mb-1">
            <ListBoxInterestingPoints/>
          </div>
          <div className="sm:hidden">
            <CardCharacter image={ACCOUNT_IMAGE}/>
          </div>
        </div>
        <div className="hidden sm:block lg:basis-2/6 mr-2">
          <CardCharacter image={ACCOUNT_IMAGE}/>
        </div>
      </div>
    </div>
  )
}