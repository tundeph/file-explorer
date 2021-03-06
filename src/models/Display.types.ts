//import { FunctionOrConstructorTypeNode } from "typescript"

export interface FileProps {
  value: { type: string; name: string; added: string }
}

export interface FolderProps {
  value: {
    type: string
    name: string
    added?: string
    files?: { type: string; name: string; added: string }[]
  }
}

export interface OptionsProps {
  options: {
    name: {
      title: string
      value: string
      asc: () => void
      desc: () => void
      checked: boolean
    }
    added: {
      title: string
      value: string
      asc: () => void
      desc: () => void
      checked: boolean
    }
  }

  handleSortBy: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface OptionsArrayProps {
  name: {
    title: string
    value: string
    asc: () => void
    desc: () => void
    checked: boolean
  }
  added: {
    title: string
    value: string
    asc: () => void
    desc: () => void
    checked: boolean
  }
}

export interface SearchBarProps {
  filterText: string | undefined
  setFilterText: (arg0: string) => void
}

export type Options = any[]

export interface ExplorerContextProviderProps {
  children: React.ReactNode
}
