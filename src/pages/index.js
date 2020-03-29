import React from 'react'
import styled from '@emotion/styled'

import Hero from 'components/sections/hero'
import Wrapper from 'components/layouts/wrapper'

export default class IndexPage extends React.Component {
	render() {
		return (
			<>
				<Hero />

				<SecondSection>
					<Wrapper>
						<Stats>
							<li>
								<strong>43</strong>
								<span>Youtube View</span>
							</li>
							<li>
								<strong>50+</strong>
								<span>Students</span>
							</li>
							<li>
								<strong>1</strong>
								<span>Course</span>
							</li>
							<li>
								<strong>10</strong>
								<span>Video tutorials</span>
							</li>
							<li>
								<strong>4</strong>
								<span>Countries</span>
							</li>
						</Stats>
					</Wrapper>
					<CarousalContainer>
						<img
							src="images/arrow.svg"
							id="left-arrow"
							class="arrows"
							alt="Move testimonials to the left"
						/>
						<Carousal>
							<li>
								<blockquote>
									Deserunt tempor commodo occaecat eu. Reprehenderit aliqua ut pariatur laboris elit
									excepteur quis tempor nisi. Ea reprehenderit est sunt anim sit sit laborum labore
									ad eu sit tempor sit. Ut culpa quis id fugiat sint magna do esse dolore ipsum et.
									Cillum in ad consequat ex et enim pariatur non incididunt sunt reprehenderit sint
									cupidatat.
								</blockquote>
								<cite>John Doe</cite>
							</li>
							<li>
								<blockquote>
									Deserunt tempor commodo occaecat eu. Reprehenderit aliqua ut pariatur laboris elit
									excepteur quis tempor nisi. Ea reprehenderit est sunt anim sit sit laborum labore
									ad eu sit tempor sit. Ut culpa quis id fugiat sint magna do esse dolore ipsum et.
									Cillum in ad consequat ex et enim pariatur non incididunt sunt reprehenderit sint
									cupidatat.
								</blockquote>
								<cite>Nerea Pardo</cite>
							</li>
						</Carousal>
						<img
							src="images/arrow.svg"
							id="right-arrow"
							class="arrows"
							alt="Move testimonials to the right"
						/>
					</CarousalContainer>
				</SecondSection>

				<Wrapper>
					<h2>Deserunt tempor commodo occaecat eu...</h2>
					<Companies>
						<li>
							<img src="images/company1.svg" alt="company1" className="company1" />
							<img src="images/company2.svg" alt="company2" className="company2" />
							<img src="images/company1.svg" alt="company1" className="company1" />
							<img src="images/company2.svg" alt="company2" className="company2" />
						</li>
					</Companies>
				</Wrapper>
			</>
		)
	}
}

const SecondSection = styled.div``
const Stats = styled.ul``
const CarousalContainer = styled.div``
const Carousal = styled.ul``
const Companies = styled.ul``
