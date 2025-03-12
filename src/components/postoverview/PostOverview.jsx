import './postoverview.css';

export default function PostOverview({title, author, reactions, shares}) {
    return (
        <article className="postoverview">
            <p>
                <span className="title">{title}</span>
                ({author})
            </p>
            <p>{reactions} reacties - {shares} keer gedeeld</p>
        </article>
    )
}