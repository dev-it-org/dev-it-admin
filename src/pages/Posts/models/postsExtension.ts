import { ChangeEvent } from 'react'

export type T_PostExtensionProps = {
  value: string
  limit: string | number
  sort: string
  handleChangeValue: (event: ChangeEvent<HTMLInputElement>) => void
  handleChangeLimit: (value: string) => void
  handleChangeSort: (value: string) => void
}
