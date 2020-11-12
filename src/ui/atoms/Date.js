import React from 'react'
import styled from 'styled-components'

const PostDate = styled.p`
    margin: 0 0 5px;
`

function Date({ data }) {
    return (
        <PostDate>{data}</PostDate>
    )
}

export default Date;