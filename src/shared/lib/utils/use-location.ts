export const useLocation = () => {
  const pathname:string = window.location.pathname

  return [pathname];
}

export const sendLocation = (url: string) => {
  window.location.pathname = url
}