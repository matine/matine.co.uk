import React from 'react'
import { TextXs, TextWrapXs, HeadingDecorated, Box, List } from '../ui'

const Links = ({ data }) => {
  const sliceContent = data.map((slice, sliceIndex) => {
    const listOfLinksTitle = slice.primary.list_of_links_title.text

    if (slice.slice_type === 'links') {
      const linkContent = slice.items.map((link, linkIndex) => (
        <li key={linkIndex}>
          <TextXs caps mb={1} fontWeight="bold" linkStyle="hover">
            <a
              href={link.link_url.raw.url}
              target="blank"
              rel="noopener noreferrer"
            >
              {link.link_name} →
            </a>
          </TextXs>
          <TextWrapXs>
            <div
              dangerouslySetInnerHTML={{
                __html: link.link_description.html,
              }}
            />
          </TextWrapXs>
        </li>
      ))

      return (
        <Box key={sliceIndex} width={[1, 1, 1 / 2, 1 / 4]}>
          <HeadingDecorated>{listOfLinksTitle}</HeadingDecorated>
          <List listStyle="bordered">{linkContent}</List>
        </Box>
      )
    }
    return null
  })

  return sliceContent
}

export default Links
