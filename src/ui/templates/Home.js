import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'

import PostsList from '../organisms/PostsList'

const StyledTitle = styled.h1`    
    font-size: 50px;
    text-align: center;
    margin-top: 50px;
    color: white;
    font-weight: 300;
    text-transform: uppercase;
`

function Home() {
    return (
        <>
            <StyledTitle>Infinity News Feed</StyledTitle>
            <PostsList />
        </>
    )
}

export default Home