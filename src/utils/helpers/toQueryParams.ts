export const toQueryParam = (params: Record<string, any>): string => {
  const entries = Object.entries(params)
  const queryParam: string[] = []

  entries.forEach((key) => {
    if (!key[1]) return
    queryParam.push(`${key[0]}=${key[1]}`)
  })

  return '?' + queryParam.join('&')
}
