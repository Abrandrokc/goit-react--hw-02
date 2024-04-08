import css from "./Feedback.module.css"
export default function Feedback({ options: { good, bad, neutral }, total, positive }) {
    console.log(positive)
return    <ul className={css.ul}>
        <li>Good: { good}</li>
        <li> Neutral: { neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total {total} </li>
    <li>Positive {positive}%</li>
    </ul> 
}