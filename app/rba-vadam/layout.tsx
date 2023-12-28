'use client'

import NavbarComponent from "@/components/ui/NavbarComponent";

export default function VadamRBALayout({ children }: {
  children: React.ReactNode
}) {

  const metadata = {
    title: 'Hola tonotos',
    options: {
      first: 'Account',
      second: 'User',
      third: 'Character'
    },
    theme: 'red'
  }

  return (
    <div className="">
      <NavbarComponent meta={metadata}/>
    </div>
  )
}