import { useParams } from 'react-router-dom'

export default function Posts() {
    const { id } = useParams();
    return (
        <div>
            Post Overview!
            {id}
        </div>
    )
}