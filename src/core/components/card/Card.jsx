import React from "react"
import "./styles.css"

// interface Props {
//   children?: JSX.Element[] | HTMLElement[] | JSX.Element | HTMLElement;
//   bg?: string;
//   image?: any;
//   style?: React.CSSProperties;
// }

const Card = ({ children = null, bg = "white", image = "", style = {} }) => {
  const styles = { backgroundColor: bg, backgroundImage: image, ...style }
  if (image)
    return (
      <div className="card" style={styles}>
        {children}
      </div>
    )
  return (
    <div className="card" style={styles}>
      {children}
    </div>
  )
}

export default Card
