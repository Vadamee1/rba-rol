"use client";

import { TabsOptions } from "@/src/interfaces/custom/tabs";
import { Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  options: TabsOptions[];
}

export const TabsComponent = ({ options }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <Tabs
        variant="underlined"
        color="warning"
        size="lg"
        selectedKey={pathname}
        className=""
      >
        {options.map((tab) => (
          <Tab key={tab.key} title={tab.title} href={tab.href} as={Link} />
        ))}
      </Tabs>
    </>
  );
};
