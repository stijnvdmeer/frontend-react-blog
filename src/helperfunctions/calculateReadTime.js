export default function calculateReadTime(value) {
    let readTime = value.length / 100 * 0.3
    return Math.round(readTime);
}