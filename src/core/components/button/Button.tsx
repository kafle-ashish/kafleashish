import React from "react"
import "./styles.css"

interface Props {
  type?: "link" | "flat" | "raised"
  children: string
  style?: React.CSSProperties
  color?: string
  intent?: string
}

export const Button = (props: Props): JSX.Element => {
  const { type = "raised", style = {}, children, color, intent } = props

  return (
    <button
      name={children.toString()}
      className={type + " button"}
      style={{
        ...style,
        color,
        border: `2px solid ${intent}`,
      }}
    >
      {children}
    </button>
  )
}
