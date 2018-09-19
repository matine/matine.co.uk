import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoadingIcon, Fixed, SvgWrap, Flex, FadeOut } from '../ui';

const Loading = ({
    isLoading,
    imgsLoading,
}) => {
    const renderLoading = () => (
        <Fixed
            key="one" 
            width={ 1 }
            position="fixed"
            zIndex={ 999 }
            bg="gray.0"
        >
            <Flex
                flex={ 1 }
                height="100%"
                alignItems="center"
                justifyContent="center"
            >
                <SvgWrap width={ 100 } height={ 100 } rotate360 color="primary">
                    <LoadingIcon />
                </SvgWrap>
            </Flex>
        </Fixed>
    );

    return (
        <FadeOut>
            { !isLoading && !imgsLoading ? null : renderLoading() }
        </FadeOut>
    );
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    imgsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading,
    imgsLoading: state.ui.imgsLoading,
});

export default connect(mapStateToProps)(Loading);
