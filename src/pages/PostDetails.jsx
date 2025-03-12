import {Link, useParams} from 'react-router-dom';
import data from '../constants/data.json';

export default function PostDetails() {
    const { id } = useParams();
    const post = data[id];

    console.log(post);
    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.subtitle}</h3>
            <span>Geschreven door {post.author} op {post.created}</span>
            <p>{post.content}</p>

            <span>{post.comments} reacties - {post.shares} keer gedeeld</span>
            <Link to="/posts">Terug naar overzichtspagina</Link>
        </div>
    )
}