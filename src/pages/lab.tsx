import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button } from '../core/components/button/Button'
import LabLayout from '../components/labLayout'

interface Props {

}

export default function Lab({ }: Props): ReactElement {
  return (
    <LabLayout>
      <Link to="/lab/my-first-post/">Go to my first Markdown blog post</Link>
    </LabLayout>
  )
}
