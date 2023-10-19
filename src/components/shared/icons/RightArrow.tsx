type RightArrowProps = {
  className?: string
  hexColor?: string
  strokeWidth?: string
}

export default function RightArrow({ className, hexColor, strokeWidth }: RightArrowProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={strokeWidth} width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM19.5303 12.5303C19.8232 12.2374 19.8232 11.7626 19.5303 11.4697L14.7574 6.6967C14.4645 6.40381 13.9896 6.40381 13.6967 6.6967C13.4038 6.98959 13.4038 7.46447 13.6967 7.75736L17.9393 12L13.6967 16.2426C13.4038 16.5355 13.4038 17.0104 13.6967 17.3033C13.9896 17.5962 14.4645 17.5962 14.7574 17.3033L19.5303 12.5303ZM5 12.75H19V11.25H5V12.75Z" fill={hexColor} />
    </svg>
  )
}
