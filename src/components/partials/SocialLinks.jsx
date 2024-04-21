import PropTypes from 'prop-types'
import React from 'react'
import {
  LinkedInIcon,
  GithubIcon,
  EmailIcon,
  List,
  LinkHover,
  SvgWrap,
} from '../ui'
import links from '../../constants/links'

function SocialLinks({ linkedIn, email, gitHub, cv }) {
  return (
    <List listStyle="inline">
      {linkedIn && (
        <li>
          <LinkHover
            href={links.linkedIn}
            hover="big"
            target="blank"
            rel="noopener noreferrer"
          >
            <SvgWrap width={25}>
              <LinkedInIcon />
            </SvgWrap>
          </LinkHover>
        </li>
      )}
      {email && (
        <li>
          <LinkHover
            href={links.email}
            hover="big"
            target="blank"
            rel="noopener noreferrer"
          >
            <SvgWrap width={25}>
              <EmailIcon />
            </SvgWrap>
          </LinkHover>
        </li>
      )}
      {gitHub && (
        <li>
          <LinkHover
            href={links.github}
            hover="big"
            target="blank"
            rel="noopener noreferrer"
          >
            <SvgWrap width={25}>
              <GithubIcon />
            </SvgWrap>
          </LinkHover>
        </li>
      )}
    </List>
  )
}

SocialLinks.defaultProps = {
  linkedIn: false,
  email: false,
  gitHub: false,
  cv: false,
}

SocialLinks.propTypes = {
  linkedIn: PropTypes.bool,
  email: PropTypes.bool,
  gitHub: PropTypes.bool,
  cv: PropTypes.bool,
}

export default SocialLinks
