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
				</SecondSection>
			</>
		)
	}
}

const SecondSection = styled.div``
const Stats = styled.ul``
