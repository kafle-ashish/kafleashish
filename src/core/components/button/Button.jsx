import React from "react"
import "./styles.css"

// interface Props {
//   type?: "link" | "flat" | "raised";
//   children: string;
//   style?: React.CSSProperties;
// }

export const Button = ({ type = "raised", children, style }) => {
  return (
    <div className={type + " button"} style={style}>
      {children}
    </div>
  )
}
