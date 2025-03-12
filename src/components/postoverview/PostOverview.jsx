import './postoverview.css';

import {Link} from 'react-router-dom'
export default function PostOverview({id, title, author, reactions, shares}) {
    return (
        <Link
            to={`/postdetails/${id}`}
            className="link"
        >
            <article className="postoverview">

                    <p>
                        <span className="title">{title}</span>
                        ({author})
                    </p>
                    <p>{reactions} reacties - {shares} keer gedeeld</p>

            </article>
        </Link>
    )
}