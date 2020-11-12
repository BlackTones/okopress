import React from 'react'
import styled from 'styled-components'

const PostExcerpt = styled.p`
    margin:0 0 40px; 

`

function Excerpt({ children }) {
    return (
        <PostExcerpt>{children}</PostExcerpt>
    )

}

export default Excerpt;