type IconArrowType = {
  class?: string
}

export const IconArrow = (props: IconArrowType) => {
  return `
    <svg class="${props.class ? props.class : ""}" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#3369F3"/>
        <rect x="8" y="13.2" width="11" height="1.6" fill="white"/>
        <path d="M15 9L19 14L15 19" stroke="white" stroke-width="1.6"/>
    </svg>
  `
}