import React from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
    font-size: 20px;
    line-height: 1em;
    margin: 0;
    font-weight: 500;
    color: white;
`

const Link = styled.a`
    text-decoration: none;
`


function Title({ children, url }) {
    return (
        <Link href={url}><Heading>{children}</Heading></Link>
    )

}

export default Title;