import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import { Button } from '../core/components/button/Button'

interface Props {
  children: React.ReactNode;
}

export default function LabLayout({ children }: Props): ReactElement {
  return (
    <section className="blog-post-container">
      <SEO
        title="Lab"
      />
      <header className="blog__header">
        <Link style={{ textDecoration: "none", outline: "none" }} to="/">
          <div className="logo__main__lab"></div>
        </Link>
        <div className="nav__links">
          <Link style={{ textDecoration: "none", outline: "none" }} to="/">
            <Button type="link">Home</Button>
          </Link>
          <Link style={{ textDecoration: "none", outline: "none" }} to="/lab/dharma">
            <Button type="link">Dharma</Button>
          </Link>
          <Link style={{ textDecoration: "none", outline: "none" }} to="/lab/itihasa">
            <Button type="link">Itihasa</Button>
          </Link>
          <Link style={{ textDecoration: "none", outline: "none" }} to="/lab/manas">
            <Button type="link">Manas</Button>
          </Link>
        </div>
      </header>
      {children}
    </section>
  )
}
