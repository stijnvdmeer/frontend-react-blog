import data from '../constants/data.json'

export default function Posts() {
    console.log(data)
    return (
        <div>
            <h1>Bekijk alle {data.length} posts op het platform</h1>
        </div>
    )
}