export const getElement = <T extends Element = HTMLElement>(id: string) => {
  return document.querySelector<T>(id)
}