export const sitePath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const currentPath = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return window.location.pathname.replace(base, '') || '/'
}
