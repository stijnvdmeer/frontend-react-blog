export default function formatDateTime(date) {
const formattedDate = new Date(date)
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    console.log(formattedDate.getMonth())
            return `${formattedDate.getDate()} ${months[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`;
}