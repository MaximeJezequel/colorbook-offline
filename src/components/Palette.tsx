export const Palette = ({
  color,
  currentColor,
  changeColor,
}: {
  color: string
  currentColor: string
  changeColor: any
}) => {
  const activeClass = currentColor === color ? "color-swatch-active" : ""

  return (
    <div
      onClick={() => {
        changeColor(color)
      }}
      className={`color-swatch ${activeClass}`}
      style={{ backgroundColor: color }}
    ></div>
  )
}
