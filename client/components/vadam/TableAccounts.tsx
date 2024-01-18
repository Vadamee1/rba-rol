import { ACCOUNTS_VADAM_TABLE, COLUMNS_ACCOUNT_VADAM_TABLE } from "@/client/constants/listbox"
import { Chip, Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from "@nextui-org/react"
import React from "react"

type Account = typeof ACCOUNTS_VADAM_TABLE[0]

export default function TableAccounts() {
  const renderCell = React.useCallback((account: Account, columnKey: React.Key) => {
    const cellValue = account[columnKey as keyof Account]

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: account.avatar }}
            description={account.nick}
            name={account.name}
          />
        )
      case "tipo":
        return (
          <p>{account.type}</p>
        )
      case "status":
        return (
          <Chip>
            {account.status}
          </Chip>
        )
      case "acciones":
        return (
          <div>
            <Tooltip content="Ir al perfil">
              <Image src="/public/images/icons/NextIcon.png" alt="Ir al perfil"></Image>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <>
      <Table>
        <TableHeader columns={COLUMNS_ACCOUNT_VADAM_TABLE}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "acciones" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={ACCOUNTS_VADAM_TABLE}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}