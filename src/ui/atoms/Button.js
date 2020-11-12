import React from 'react'
import styled from 'styled-components'

const ReadMore = styled.a`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    text-decoration: none;
    color: white;
    background: #4e4f50;
    text-transform: uppercase;
    line-height: calc(1em + 20px);
`


function Button({ url }) {
    return (
        <ReadMore href={url}>Czytaj więcej</ReadMore>
    )

}

export default Button;