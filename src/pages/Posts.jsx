
import PostOverview from "../components/postoverview/PostOverview.jsx";

export default function Posts({data}) {
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
                        reactions={post.comments}
                        shares={post.shares}
                    />
                ))
            }
        </div>
    )
}