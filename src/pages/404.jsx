import React from 'react'
import PageLayout from '../components/partials/PageLayout'
import { Box, Text, PageHeading } from '../components/ui'

const NotFoundPage = () => {
  const pageName = 'not-found'

  return (
    <PageLayout>
      <Box id={`${pageName}-page`} pb={5}>
        <PageHeading>404</PageHeading>
        <Box pb={5}>
          <Text textAlign="center">
            The page you were looking for could not be found!
          </Text>
        </Box>
      </Box>
    </PageLayout>
  )
}

export default NotFoundPage
