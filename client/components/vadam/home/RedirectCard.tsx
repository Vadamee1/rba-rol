'use client'

import { Card, CardBody, CardFooter, Link, Listbox, ListboxItem } from "@nextui-org/react"
import { PRINCIPAL_ROUTES } from "@/client/constants/routes"

export const RedirectCard = () => {
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