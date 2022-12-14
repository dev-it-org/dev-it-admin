export type T_Post = {
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string
  link: string
}

export enum E_OrderBy {
  asc = 'asc',
  desc = 'desc',
}
