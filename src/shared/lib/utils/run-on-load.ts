export const runOnLoad  = (content: () => void) => {
  document.addEventListener("DOMContentLoaded", () => {
    content()
  })
}
