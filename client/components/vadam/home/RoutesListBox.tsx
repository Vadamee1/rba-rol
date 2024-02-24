'use client'

import { PRINCIPAL_ROUTES } from "@/client/constants/routes"
import { Listbox, ListboxItem } from "@nextui-org/react"

export const RoutesListBox = () => {
  return (
    <>
      <Listbox>
        {PRINCIPAL_ROUTES.map((route) => (
          <ListboxItem key={route.id} href={route.href} title={route.title}></ListboxItem>
        ))}
      </Listbox>
    </>
  )
}