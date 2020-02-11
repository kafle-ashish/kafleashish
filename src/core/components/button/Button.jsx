import React from "react"
import "./styles.css"

// interface Props {
//   type?: "link" | "flat" | "raised";
//   children: string;
//   style?: React.CSSProperties;
// }

export const Button = ({
  type = "raised",
  children,
  style = {},
  color,
  intent,
}) => {
  return (
    <div
      className={type + " button"}
      style={{
        ...style,
        color,
        border: `2px solid ${intent}`,
      }}
    >
      {children}
    </div>
  )
}
