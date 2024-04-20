import React, {useState, useEffect} from 'react'

const Fetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://atcoder.jp/users/nzm_ort/history/json', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
        console.log(posts);
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => 
                    <li key={post.EndTime}>{post.OldRating}</li>
                    )
                }
            </ul>

        </div>
    )
}

export default Fetch;
