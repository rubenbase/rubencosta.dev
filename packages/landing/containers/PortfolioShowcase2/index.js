import React from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/box";
import Container from "common/src/components/ui/container";

function PortfolioShowcase2({ sectionWrapper }) {
    return (
        <Box {...sectionWrapper} as="section">
            <Container width="1200px">
                <div>Banner section</div>
                <div>This is a description test</div>
            </Container>
        </Box>
    );
}

PortfolioShowcase2.propTypes = {
    sectionWrapper: PropTypes.object
};

PortfolioShowcase2.defaultProps = {
    sectionWrapper: {
        flexBox: true,
        bg: "#eaecfe",
        display: "flex",
        flexDirection: "column"
    }
};

export default PortfolioShowcase2;
