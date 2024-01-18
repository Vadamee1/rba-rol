import { LISTBOX_EXCLUSIVE_VADAM, LISTBOX_MULTIMUSE_VADAM } from "@/client/constants/listbox"
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react"
import { AvatarComponent } from "../custom/AvatarComponent"

export const ListBoxInterestingPoints = () => {
  return (
    <>
      <Listbox variant="flat" className="text-3xl">
        <ListboxSection title="Exclusive accounts" showDivider>
          {LISTBOX_EXCLUSIVE_VADAM.map((list) => (
            <ListboxItem 
              key={list.key} 
              color={list.color}
              href={list.href}
            >
              <div className="flex gap-4 items-center ml-1 mt-2 mb-2">
                <AvatarComponent color={list.avatar.color} src={list.avatar.src}/>
                <div className="flex flex-col">
                  <span>{list.content}</span>
                  <span className="text-tiny text-default-400">{list.description}</span>
                </div>
              </div>
            </ListboxItem>
          ))}
        </ListboxSection>
        <ListboxSection title="Multimuse">
          {LISTBOX_MULTIMUSE_VADAM.map((list) => (
            <ListboxItem 
              key={list.key}
              color={list.color}
              href={list.href}
            >
              <div className="flex gap-4 items-center ml-1 mt-1 mb-1">
                <AvatarComponent color={list.avatar.color} src={list.avatar.src}/>
                <span>
                  {list.content}
                </span>
              </div>
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
    </>
  )
}