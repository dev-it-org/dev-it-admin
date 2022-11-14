export type T_PostsRequest = {
  title?: string
  limit?: string
  page?: string
  sort?: string
}

export type T_PostMutationRequest = {
  title: string
  description: string
  link: string
}
