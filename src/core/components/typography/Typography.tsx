import React from "react"
import "./styles.css"

interface Props {
  children: React.ReactNode;
  type?: "body" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "light__bold" | "title" | "light";
  style?: React.CSSProperties;
  color?: string;
  className?: string;
}

const Typography = (props: Props) => {
  const {
    children,
    type = "body",
    style,
    color = "#202b33",
    className = "",
  } = props;

  const styles = { ...style, color }
  return (
    <div className={type + " " + className} style={styles}>
      {children}
    </div>
  )
}

export default Typography
