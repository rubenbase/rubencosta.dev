import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Box from "reusecore/src/elements/box";
import Heading from "reusecore/src/elements/heading";
import Text from "reusecore/src/elements/text";
import Image from "reusecore/src/elements/image";

import Container from "common/src/components/ui/container";

import { PORTFOLIO_SHOWCASE } from "common/src/data/";

import {
    PortfolioShowcaseWrapper,
    PortfolioShowcaseItem,
    PortfolioLink,
    BuiltWith,
    PortfolioMeta,
    MetaItem
} from "./portfolioShowcase.style";

function PortfolioShowcase({
    sectionWrapper,
    secTitleWrapper,
    secTitle,
    secDescription,
    portfolioImage,
    portfolioDetails,
    titleStyle,
    detailsStyle
}) {
    return (
        <Box {...sectionWrapper} as="section" id="portfolio_section">
            <Container noGutter mobileGutter width="1200px">
                <Box {...secTitleWrapper}>
                    <Heading {...secTitle} content="Hello there!" />
                    <Text
                        {...secDescription}
                        content="My name is Rubén Costa and I'm a Software developer and teacher. I'm also active in the open source community. I like JavaScript, Nodejs, React and AWS."
                    />
                </Box>
                <PortfolioShowcaseWrapper>
                    {PORTFOLIO_SHOWCASE.map((tabItem, index) => (
                        <>
                            {tabItem.portfolioItem.map(
                                (portfolioItem, index) => (
                                    <PortfolioShowcaseItem>
                                        <Box {...portfolioImage}>
                                            <Image
                                                src={portfolioItem.image}
                                                alt={`PortfolioImage-${index +
                                                    1}`}
                                            />
                                        </Box>
                                        <Box {...portfolioDetails}>
                                            <PortfolioLink>
                                                <Link
                                                    href={
                                                        portfolioItem.link ||
                                                        "#"
                                                    }
                                                >
                                                    <a>VISIT LIVE SITE</a>
                                                </Link>
                                            </PortfolioLink>
                                            <Heading
                                                content={portfolioItem.title}
                                                {...titleStyle}
                                            />
                                            <Text
                                                content={
                                                    portfolioItem.description
                                                }
                                                {...detailsStyle}
                                            />
                                            {portfolioItem.buildWith ? (
                                                <BuiltWith>
                                                    {portfolioItem.buildWith.map(
                                                        (item, index) => (
                                                            <span
                                                                key={`buildWith-item-${index}`}
                                                            >
                                                                {item.content}
                                                            </span>
                                                        )
                                                    )}
                                                </BuiltWith>
                                            ) : (
                                                ""
                                            )}
                                        </Box>

                                        {portfolioItem.featuredIn ||
                                        portfolioItem.view ||
                                        portfolioItem.love ||
                                        portfolioItem.feedback ? (
                                            <PortfolioMeta>
                                                {portfolioItem.featuredIn ? (
                                                    <MetaItem className="meta_featured">
                                                        FEATURED IN
                                                        <Link
                                                            href={
                                                                portfolioItem.featuredLink ||
                                                                "#"
                                                            }
                                                        >
                                                            <a>
                                                                {
                                                                    portfolioItem.featuredIn
                                                                }
                                                            </a>
                                                        </Link>
                                                    </MetaItem>
                                                ) : (
                                                    ""
                                                )}
                                                {portfolioItem.view ? (
                                                    <MetaItem>
                                                        <b>
                                                            {portfolioItem.view}
                                                        </b>{" "}
                                                        View
                                                    </MetaItem>
                                                ) : (
                                                    ""
                                                )}
                                                {portfolioItem.love ? (
                                                    <MetaItem>
                                                        <b>
                                                            {portfolioItem.love}
                                                        </b>{" "}
                                                        Love
                                                    </MetaItem>
                                                ) : (
                                                    ""
                                                )}
                                                {portfolioItem.feedback ? (
                                                    <MetaItem>
                                                        <b>
                                                            {
                                                                portfolioItem.feedback
                                                            }
                                                        </b>{" "}
                                                        Feedback
                                                    </MetaItem>
                                                ) : (
                                                    ""
                                                )}
                                            </PortfolioMeta>
                                        ) : (
                                            ""
                                        )}
                                    </PortfolioShowcaseItem>
                                )
                            )}
                        </>
                    ))}
                </PortfolioShowcaseWrapper>
            </Container>
        </Box>
    );
}

PortfolioShowcase.propTypes = {
    sectionWrapper: PropTypes.object,
    secTitleWrapper: PropTypes.object,
    secTitle: PropTypes.object,
    secDescription: PropTypes.object,
    portfolioImage: PropTypes.object,
    portfolioDetails: PropTypes.object,
    titleStyle: PropTypes.object,
    detailsStyle: PropTypes.object
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
    },
    portfolioImage: {
        width: [1, 1, 1 / 2]
    },
    portfolioDetails: {
        width: [1, 1, 1 / 2],
        p: ["30px 0 0 0", "40px 0 0 0", "0 0 0 30px", "0 50px", "0 50px"]
    },
    titleStyle: {
        fontSize: ["22px", "22px", "26px", "40px", "40px"],
        fontWeight: "600",
        color: "#302b4e",
        mb: "17px"
    },
    detailsStyle: {
        fontSize: ["15px", "15px", "15px", "16px", "16px"],
        color: "#43414e",
        lineHeight: "1.5",
        mb: "0"
    }
};
export default PortfolioShowcase;
