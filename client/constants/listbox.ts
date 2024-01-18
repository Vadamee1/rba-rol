interface ListboxType {
  key: number
  color: 'danger' |'warning' | 'secondary'
  description?: string
  content: string
  href: string
  avatar: {
    src: string
    color: 'danger' |'warning' | 'secondary'
  }
}

export const LISTBOX_EXCLUSIVE_VADAM: ListboxType[] = [
  {
    key: 1,
    color: "warning",
    description: "King of heroes - Fate series",
    content: "Gilgamesh",
    href: "https://www.facebook.com/profile.php?id=100095360160895",
    avatar: {
      src: "/images/vadam/profile/Gilgamesh.jpg", 
      color: "warning"
    }
  },
  {
    key: 2,
    color: "secondary",
    description: "Shadow reaper - League of legends",
    content: "Kayn",
    href: "https://www.facebook.com/profile.php?id=61553795341690",
    avatar: {
      src: "/images/vadam/profile/Kayn.jpg", 
      color: "secondary"
    }
  }
]

export const LISTBOX_MULTIMUSE_VADAM: ListboxType[] = [
  {
    key: 1,
    color: "danger",
    content: "Vadam",
    href: "https://www.facebook.com/profile.php?id=61554682120960",
    avatar: {
      src: "/images/vadam/profile/Vadam.jpg", 
      color: "danger"
    }
  }
]

interface AccountTable {
  key: number
  name: string
  nick?: string
  type: string
  status: boolean
  href: string
  avatar: string
}

export const ACCOUNTS_VADAM_TABLE: AccountTable[] = [
  {
    key: 1,
    name: "Gilgamesh",
    nick: "King of heroes - Fate series",
    type: "Exclusive",
    status: true,
    href: "https://www.facebook.com/profile.php?id=100095360160895",
    avatar: "/images/vadam/profile/Gilgamesh.jpg"
  },
  {
    key: 2,
    name: "Kayn",
    nick: "Shadow reaper - League of legends",
    type: "Exclusive",
    status: true,
    href: "https://www.facebook.com/profile.php?id=61553795341690",
    avatar: "/images/vadam/profile/Kayn.jpg",
  },
  {
    key: 1,
    name: "Vadam",
    type: "Multimuse",
    status: true,
    href: "https://www.facebook.com/profile.php?id=61554682120960",
    avatar: "/images/vadam/profile/Vadam.jpg",
  }
]

export const  COLUMNS_ACCOUNT_VADAM_TABLE = [
  {
    name: "Cuenta",
    uid: "cuenta"
  },
  {
    name: "Tipo",
    uid: "tipo"
  },
  {
    name: "Estatus",
    uid: "estatus"
  },
  {
    name: "Acciones",
    uid: "acciones"
  }
]