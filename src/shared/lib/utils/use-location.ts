export const useLocation = () => {
  const pathname = window.location.pathname

  return [pathname] as const;
}