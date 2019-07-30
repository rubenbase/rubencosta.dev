import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { ErrorWrapper, ErrorContent } from "./error.style";
import Button from "reusecore/src/elements/button";

function Error404({ homeButton }) {
    return (
        <ErrorWrapper>
            <ErrorContent>
                <Link href="/">
                    <a>
                        <Button
                            {...homeButton}
                            type="submit"
                            title="Go Home"
                            variant="outlined"
                            className="domain_search_button"
                        />
                    </a>
                </Link>
            </ErrorContent>
        </ErrorWrapper>
    );
}

Error404.propTypes = {
    imageWrapper: PropTypes.object
};

Error404.defaultProps = {
    imageWrapper: {
        mb: ["40px", "55px"]
    },
    homeButton: {
        type: "button",
        fontSize: "16px",
        fontWeight: "500",
        color: "#0f2137",
        pl: ["15px", "22px"],
        pr: ["15px", "22px"],
        iconPosition: "left",
        bg: "#e2e7f0",
        fontFamily: "lato"
    }
};

export default Error404;
