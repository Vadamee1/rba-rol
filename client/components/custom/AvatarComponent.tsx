'use client'

import { Avatar } from "@nextui-org/react"

interface Props {
    color: "warning" | "danger" | "secondary" | "success"
    src: string
}

export const AvatarComponent = ( { color, src }: Props ) => {
  return (
    <>
      <Avatar
        isBordered
        color={color}
        src={src}
      />
    </>
  )
}
