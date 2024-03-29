
import { getSection, getSectionsWithAccordions } from "@/src/actions/create-rba/section/get-section";
import { PageCreateRBA } from "@/src/components/create-rba/PageCreateRBA";
import { Title } from "@/src/components/custom/Title";
import { SectionWithAccordions } from "@/src/interfaces/rba/SectionRBADto";

export default async function CreateRBAPage() {
  const sectionsWithAccordions: SectionWithAccordions[] =
    await getSectionsWithAccordions(1);
  const sections = await getSection(1);

  return (
    <>
      <Title title="Crea tu propio RBA" className="ml-5 mt-5" />
      <div className="flex flex-row mt-5">
        <PageCreateRBA
          sectionsWithAccordions={sectionsWithAccordions}
          sections={sections}
        />
      </div>
    </>
  );
}
