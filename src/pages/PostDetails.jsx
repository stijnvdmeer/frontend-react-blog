import '../styles/postdetails.css';
import {Link, useParams} from 'react-router-dom';
import data from '../constants/data.json';
import formatDateTime from '../helperfunctions/formatDateTime';

export default function PostDetails() {
    const { id } = useParams();
    const post = data[id - 1];

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <h3>{post.subtitle}</h3>
            <span>Geschreven door {post.author} op {formatDateTime(post.created)}</span>
            <span className="readtime"> &#9202; {post.readTime} minuten lezen</span>
            <p>{post.content}</p>

            <span>{post.comments} reacties - {post.shares} keer gedeeld</span>
            <Link
                to="/posts"
                className="post-details__link"
            >
                &lArr;  Terug naar overzichtspagina
            </Link>
        </div>
    )
}