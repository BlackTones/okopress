import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

import Post from '../molecules/Post'


const PostListContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    margin-top: 50px;
`

const PostList = () => {

    const [posts, setPostsData] = useState([]);
    const [page, setPage] = useState(0);
    const loader = useRef(null);


    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);

    useEffect(() => {
        async function fetchData(limit, page) {
            const result = await Axios({
                method: 'get',
                url: 'http://localhost:3000/posts',
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            setPostsData([
                ...posts,
                ...result.data
            ]);
        }
        fetchData(10, page);
    }, [page])

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }
    return (
        <PostListContainer>
            {posts.map((p, i) => {
                let formatter = new Intl.DateTimeFormat('pl', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
                let formatedDate = p.date.split(" ");
                let data = formatter.format(new Date(formatedDate[0] + 'T' + formatedDate[1]));
                return <Post title={p.title} excerpt={p.excerpt} date={data} thumb={p.thumb} url={p.url} key={i} />
            })}

            <div className="loading" ref={loader}>
            </div>
        </PostListContainer>

    )
}

export default PostList