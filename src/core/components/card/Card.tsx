import React from "react"
import "./styles.css"

interface Props {
  children?: JSX.Element[] | HTMLElement[] | JSX.Element | HTMLElement;
  bg?: string;
  image?: any;
  style?: React.CSSProperties;
}

const Card = (props: Props) => {
  const { children = null, bg = "white", image = "", style = {} } = props;
  const styles = { backgroundColor: bg, backgroundImage: image, ...style };

  return (
    <div className="card" style={styles}>
      {children}
    </div>
  )
}

export default Card
