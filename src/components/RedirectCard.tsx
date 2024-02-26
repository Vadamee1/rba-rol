'use client'

import { PRINCIPAL_ROUTES } from "@/src/constants/routes"
import { Card, CardBody, CardFooter, Listbox, ListboxItem } from "@nextui-org/react"

export const RedirectCreateCard = () => {
  return (
    <>
      <Card>
        <CardFooter>
          ¿A dónde quieres ir?
        </CardFooter>
        <CardBody>
          <Listbox>
            {PRINCIPAL_ROUTES.map((route) => (
              <ListboxItem key={route.id} href={route.href} title={route.title}/>
            ))}
          </Listbox>
        </CardBody>
      </Card>
    </>
  )
}