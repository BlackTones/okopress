import React from 'react'
import styled from 'styled-components'

const PostImg = styled.img`
width: 300px;
margin-right: 25px;
`
const Link = styled.a`
    line-height: 1px;
`

function Image({ thumb, url }) {
    return (
        <Link href={url}><PostImg src={thumb} /></Link>
    )

}

export default Image;