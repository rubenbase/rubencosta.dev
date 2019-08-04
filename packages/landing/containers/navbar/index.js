import React, { useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import NavbarWrapper from "reusecore/src/elements/Navbar";
import Box from "reusecore/src/elements/Box";
import Container from "common/src/components/ui/container";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
    return (
        <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
            <Container noGutter mobileGutter width="1200px">
                <Box {...row}>
                    <h3>Logo</h3>
                    <Box {...menuWrapper}>
                        <div>Link 1</div>
                        <div>Link 2</div>
                    </Box>
                </Box>
            </Container>
        </NavbarWrapper>
    );
};

Navbar.propTypes = {
    navbarStyle: PropTypes.object,
    logoStyle: PropTypes.object,
    button: PropTypes.object,
    row: PropTypes.object,
    menuWrapper: PropTypes.object
};

Navbar.defaultProps = {
    navbarStyle: {
        minHeight: "70px",
        display: "block"
    },
    row: {
        flexBox: true,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    logoStyle: {
        maxWidth: ["120px", "130px"]
    },
    button: {
        type: "button",
        fontSize: "16px",
        pl: "0",
        pr: "0",
        colors: "primary",
        minHeight: "auto"
    },
    menuWrapper: {
        flexBox: true,
        alignItems: "center"
    }
};

export default Navbar;
