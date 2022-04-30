import React from 'react'
import withLayout from '../components/hoc/withLayout'
import { Box, Text, PageHeading } from '../components/ui'

const NotFoundPage = () => {
  const pageName = 'not-found'

  return (
    <Box
      id={`${pageName}-page`}
      pb={5}
    >
      <PageHeading>
        404
      </PageHeading>
      <Box pb={5}>
        <Text textAlign="center">
          The page you were looking for could not be found!
        </Text>
      </Box>
    </Box>
  )
}

export default withLayout(NotFoundPage)
