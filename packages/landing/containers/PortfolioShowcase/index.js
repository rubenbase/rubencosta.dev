import React from "react";
import PropTypes from "prop-types";

import Box from "reusecore/src/elements/box";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";

import Container from "common/src/components/ui/container";

function PortfolioShowcase({
    sectionWrapper,
    secTitleWrapper,
    secTitle,
    secDescription
}) {
    return (
        <Box {...sectionWrapper} as="section" id="portfolio_section">
            <Container noGutter mobileGutter width="1200px">
                <Box {...secTitleWrapper}>
                    <Heading
                        {...secTitle}
                        content="Making Ideas Come to Life !"
                    />
                    <Text
                        {...secDescription}
                        content="This is a test, Ruben Costa has been created 
                    to show the projects I made in my free time. Take a look!"
                    />
                </Box>
            </Container>
        </Box>
    );
}

PortfolioShowcase.propTypes = {
    sectionWrapper: PropTypes.object,
    secTitleWrapper: PropTypes.object,
    secTitle: PropTypes.object,
    secDescription: PropTypes.object
};

PortfolioShowcase.defaultProps = {
    sectionWrapper: {
        pt: ["60px", "80px", "100px", "110px", "150px"],
        pb: ["60px", "80px", "100px", "110px", "150px"]
    },
    secTitleWrapper: {
        width: ["100%", "100%", "60%", "50%", "50%"],
        mb: ["50px", "65px"]
    },
    secTitle: {
        fontSize: ["22px", "26px", "26px", "30px", "30px"],
        fontWeight: "600",
        color: "#302b4e",
        lineHeight: "1.34",
        mb: ["15px", "18px", "18px", "20px", "20px"]
    },
    secDescription: {
        fontSize: ["15px", "16px"],
        fontWeight: "400",
        color: "#43414e",
        lineHeight: "1.5",
        mb: "0"
    }
};

export default PortfolioShowcase;
