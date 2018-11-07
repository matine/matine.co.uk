import React, { PureComponent } from 'react'
import withLayout from '../components/hoc/withLayout'
import { Box, Container, Text, PageHeading } from '../components/ui'

class NotFoundPage extends PureComponent {
    /**
     * Renders the component.
     *
     * @return {ReactNode}
     */
    render () {
        const pageName = 'not-found'

        return (
            <Container
                id={ `${ pageName }-page` }
                pb={ 5 }
            >
                <PageHeading>
                    404
                </PageHeading>
                <Box pb={ 5 }>
                    <Text
                        textAlign="center"
                    >
                        The page you were looking for could not be found!
                    </Text>
                </Box>
            </Container>
        )
    }
}

export default withLayout(NotFoundPage)
