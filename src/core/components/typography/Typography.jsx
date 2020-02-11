import React from "react"
import "./styles.css"

// interface Props {
//   children: React.ReactNode;
//   type?: "body" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "light__bold" | "title" | "light";
//   style?: React.CSSProperties;
//   color?: string;
// }

const Typography = ({
  children,
  type = "body",
  style,
  color = "#202b33",
  className,
}) => {
  const styles = { ...style, color }
  return (
    <div className={type + " " + className} style={styles}>
      {children}
    </div>
  )
}

export default Typography
