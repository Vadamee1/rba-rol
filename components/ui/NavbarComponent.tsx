'use client'

import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { FC, useState } from "react";

interface Props {
    meta: {
      title: string
      options: {
        first: string
        second: string
        third: string
      }
      theme: string
    }
}

const NavbarComponent: FC<Props> = ({ meta }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className={`${meta.theme}`}>
        <NavbarBrand>
          <p>RBA</p>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            { meta.options.first }
          </NavbarItem>
          <NavbarItem>
            { meta.options.second }
          </NavbarItem>
          <NavbarItem>
            { meta.options.third }
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Avatar/>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default NavbarComponent