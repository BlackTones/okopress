import React from 'react'
import styled from 'styled-components'

import Date from '../atoms/Date'
import Title from '../atoms/Title'
import Excerpt from '../atoms/Excerpt'
import Image from '../atoms/Image'
import Button from '../atoms/Button'

const StyledPost = styled.article`
    margin: 0px auto 50px;
    padding: 25px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    background: #242526;
    color: white;
`


function Post({ title, thumb, date, excerpt, url }) {
    return (
        <StyledPost>

            <Image thumb={thumb} url={url} />
            <div>
                <Title url={url} >{title}</Title>
                <Date data={date} />
                <Excerpt>{excerpt}</Excerpt>
                <Button url={url} />
            </div>
        </StyledPost>
    )
}

export default Post;