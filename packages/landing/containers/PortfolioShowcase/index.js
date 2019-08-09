import React from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/box";

import Container from "common/src/components/ui/container";

function PortfolioShowcase({ sectionWrapper, secTitleWrapper, secTitle }) {
    return (
        <Box {...sectionWrapper} as="section" id="portfolio_section">
            <Container noGutter mobileGutter width="1200px">
                <Box {...secTitleWrapper}>
                    <Heading
                        {...secTitle}
                        content="Making Ideas Come to Life !"
                    />
                    <h4>This is an example title</h4>
                </Box>
            </Container>
        </Box>
    );
}

PortfolioShowcase.propTypes = {
    sectionWrapper: PropTypes.object,
    secTitleWrapper: PropTypes.object,
    secTitle: PropTypes.object
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
    }
};

export default PortfolioShowcase;
