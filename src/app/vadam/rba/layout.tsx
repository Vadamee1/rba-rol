import { TabsComponent } from "@/src/components/custom/TabsComponent";
import { Title } from "@/src/components/custom/Title";
import { ListBoxInterestingPoints } from "@/src/components/vadam/ListboxInterestingPoints";
import { CardCharacter } from "@/src/components/vadam/cards/CardCharacter";
import { ACCOUNT_IMAGE } from "@/src/constants/image.dto";
import { TABS_OPTIONS_VADAM } from "@/src/constants/tabsOptions";

export default function RBAPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-full lg:basis-4/6">
          <Title title="READ BEFORE ADD" className="mb-5 mt-5 ml-3" />
          <div className="flex mb-5">
            <TabsComponent options={TABS_OPTIONS_VADAM} />
          </div>
          {children}
          <div className="ml-2 mt-3 mb-1">
            <ListBoxInterestingPoints />
          </div>
          <div className="sm:hidden">
            <CardCharacter image={ACCOUNT_IMAGE} />
          </div>
        </div>
        <div className="hidden sm:block lg:basis-2/6 mr-2">
          <CardCharacter image={ACCOUNT_IMAGE} />
        </div>
      </div>
    </>
  );
}
