import data from '../constants/data.json'
import PostOverview from "../components/postoverview/PostOverview.jsx";

export default function Posts() {
    return (
        <div>
            <h1>Bekijk alle {data.length} posts op het platform</h1>
            {
                data.map(post => (
                    <PostOverview
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        author={post.author}
                        reactions={post.reactions}
                        shares={post.shares}
                    />
                ))
            }
        </div>
    )
}