export const getElementId = <T extends Element = HTMLElement>(id: string) => {
  return document.querySelector<T>(id)
}