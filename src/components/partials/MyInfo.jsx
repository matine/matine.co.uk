import React from 'react'
import { Link } from 'gatsby'
import { TextWrapMd } from '../ui'

function MyInfo() {
  return (
    <TextWrapMd textSpacing linkStyle="default">
      <p>
        View my full&nbsp;
        <Link to="/cv">CV</Link>
      </p>
    </TextWrapMd>
  )
}

export default MyInfo
