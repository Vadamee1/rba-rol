import { redirect } from "next/navigation"

export default function Home() {
  redirect('/vadam/rba/account')
  
  return (
    <>
      <div></div>
    </>
  )
}
