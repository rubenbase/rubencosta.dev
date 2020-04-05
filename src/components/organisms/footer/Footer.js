import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export default function Footer() {
	return (
		<FooterContainer>
			<StyledFooter>
				<LayoutContainer>
					<ThemeableFooter>
						<Row>
							<Column>
								<FooterLinksContainer>
									<FooterLinksList>
										<FooterLink>
											<UnstyledAnchor>
												<Span>Stocks</Span>
											</UnstyledAnchor>
										</FooterLink>
										<FooterLink>
											<UnstyledAnchor>
												<Span>Stocks</Span>
											</UnstyledAnchor>
										</FooterLink>
										<FooterLink>
											<UnstyledAnchor>
												<Span>Stocks</Span>
											</UnstyledAnchor>
										</FooterLink>
										<FooterLink>
											<UnstyledAnchor>
												<Span>Stocks</Span>
											</UnstyledAnchor>
										</FooterLink>
										<FooterLink>
											<UnstyledAnchor>
												<Span>Stocks</Span>
											</UnstyledAnchor>
										</FooterLink>
										<FooterLink>
											<UnstyledAnchor>
												<Span>Stocks</Span>
											</UnstyledAnchor>
										</FooterLink>
									</FooterLinksList>
								</FooterLinksContainer>
							</Column>
							<Column>
								<FooterLinksContainer>
									<FooterContactUs>
										<SocialMediaLink>
											<a
												href="https://www.linkedin.com/in/rubencostam"
												css={css`
													color: white;
													cursor: pointer;
													text-decoration: underline;
												`}
											>
												<svg
													height="20"
													width="20"
													css={css`
														fill: #ffffff;
													`}
												>
													<path d="M17.0392 17.0433H14.0775V12.4025C14.0775 11.2958 14.055 9.87167 12.5342 9.87167C10.99 9.87167 10.7542 11.0758 10.7542 12.3208V17.0433H7.7925V7.5H10.6375V8.80083H10.6758C11.0733 8.05083 12.04 7.25917 13.4842 7.25917C16.485 7.25917 17.04 9.23417 17.04 11.805V17.0433H17.0392ZM4.4475 6.19417C3.49417 6.19417 2.72833 5.4225 2.72833 4.47333C2.72833 3.525 3.495 2.75417 4.4475 2.75417C5.3975 2.75417 6.1675 3.525 6.1675 4.47333C6.1675 5.4225 5.39667 6.19417 4.4475 6.19417ZM5.9325 17.0433H2.9625V7.5H5.9325V17.0433ZM18.5208 0H1.47583C0.66 0 0 0.645 0 1.44083V18.5592C0 19.3558 0.66 20 1.47583 20H18.5183C19.3333 20 20 19.3558 20 18.5592V1.44083C20 0.645 19.3333 0 18.5183 0H18.5208Z"></path>
												</svg>
											</a>
										</SocialMediaLink>
										<SocialMediaLink></SocialMediaLink>
										<SocialMediaLink></SocialMediaLink>
									</FooterContactUs>
								</FooterLinksContainer>
							</Column>
						</Row>
						<Row>
							<Column>a</Column>
							<Column>b</Column>
						</Row>
						<hr />
						<Row>This is the Footer</Row>
						<Row>
							<span>2020 Ruben Costa</span>
						</Row>
					</ThemeableFooter>
				</LayoutContainer>
			</StyledFooter>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	-webkit-box-flex: 0;
	-webkit-flex-grow: 0;
	-ms-flex-positive: 0;
	flex-grow: 0;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
`

const StyledFooter = styled.footer`
	background-color: #000000;
	color: white;
	border: 0;
	margin: 0;
	padding: 0;
	width: 100%;
`

const LayoutContainer = styled.div`
	box-sizing: border-box;
	max-width: 768px;
	width: 100%;
	margin: 0px auto;
	padding: 0px 60px;
`

const ThemeableFooter = styled.div`
	padding: 30px 0px 60px;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: calc(100% + 14px);
	margin: 0px -7px;
`

const Column = styled.div`
	width: 648px;
	margin: 0px 7px;
`

const FooterLinksContainer = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 30px 0px;
`
const FooterLinksList = styled.ul`
	align-items: flex-start;
	display: flex;
	flex-direction: row;
	width: 100%;
	-webkit-box-pack: justify;
	justify-content: space-between;
	list-style: none;
	margin: 0px;
	padding: 0px;
`
const FooterLink = styled.li`
	margin-top: 12px;
`
const UnstyledAnchor = styled.a`
	color: inherit;
	-webkit-text-decoration: none;
	text-decoration: none;
	display: unset;
	text-align: start;
`

const Span = styled.span`
	font-size: 16px;
	font-style: normal;
	font-weight: 300;
	line-height: 19px;
	letter-spacing: normal;
	color: rgb(255, 255, 255);
	margin: 0px;
	text-decoration: unset;
`

const FooterContactUs = styled.ul`
	align-items: flex-end;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	list-style: none;
	padding: 12px 0px 0px;
	margin: -10px;
`

const SocialMediaLink = styled.li`
	margin: 10px;
`
