import React from "react"
import "./styles.module.css"

// interface Props {
//   children: React.ReactNode;
//   type?: "body" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "light__bold" | "title" | "light";
//   style?: React.CSSProperties;
//   color?: string;
// }

const Typography = ({ children, type = "body", style, color = "black" }) => {
  const styles = { ...style, color: color }
  return (
    <div className={type} style={styles}>
      {children}
    </div>
  )
}

export default Typography
