'use client'

import { PathNavbar } from "@/client/interfaces/paths/pathsNavbar";
import { Avatar, Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

interface Props {
  options: PathNavbar[]
}

export const NavbarComponent = ({options}: Props) => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <Link color="foreground" href="/vadam">About account</Link>
        </NavbarBrand>
        <div className="hidden sm:block">
          <NavbarContent>
            {options.map((option) => (
              <NavbarItem key={option.key}>
                <Link href={option.href} color="foreground" isBlock isDisabled={option.isDisable}>
                  { option.title }
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </div>
        <NavbarContent justify="end">
          <p className="text-tiny font-semibold">VADAM</p>
          <Avatar
            isBordered
            color="success"
            src="/images/vadam/profile/LuisMiguelAvatar.jpg"
          />
        </NavbarContent>
      </Navbar>
    </>
  )
}
