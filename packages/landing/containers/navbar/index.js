import React, { useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
    return <div></div>;
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
