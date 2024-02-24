'use client'

import { Card, CardBody, CardFooter, Link, Listbox, ListboxItem } from "@nextui-org/react"
import { CREATE_RBA_ROUTES } from "@/client/constants/routes"

export const RedirectCreateCard = () => {
  return (
    <>
      <Card>
        <CardFooter>
          ¿A dónde quieres ir?
        </CardFooter>
        <CardBody>
          <Listbox>
            {CREATE_RBA_ROUTES.map((route) => (
              <ListboxItem key={route.id} href={route.href} title={route.title}/>
            ))}
          </Listbox>
        </CardBody>
      </Card>
    </>
  )
}