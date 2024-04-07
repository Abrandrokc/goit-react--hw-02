import css from "./feedback.module.css"
export default function Feedback({ options: { good, bad, neutral } }) {
    const total = good + neutral + bad
    let positive = Math.round((good / total) * 100)
return    <ul className={css.ul}>
        <li>Good: { good}</li>
        <li> Neutral: { neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total {total} </li>
    <li>Positive {positive}%</li>
    </ul> 
}