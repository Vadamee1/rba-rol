import { TabsComponent } from "@/client/components/custom/TabsComponent"
import { Title } from "@/client/components/custom/Title"
import { TABS_OPTIONS_VADAM } from "@/client/constants/tabsOptions"

export default function RBAPage({ children }: { 
  children: React.ReactNode 
}) {

  return (
    <>
      <div className=" mr-2">
        <Title title="READ BEFORE ADD" className="mb-5 mt-5 ml-3"/>
        <div className="flex mb-5">
          <TabsComponent options={TABS_OPTIONS_VADAM}/>
        </div>
        {children}
      </div>
    </>
  )
}