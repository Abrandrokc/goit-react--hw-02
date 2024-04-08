import css from "./Options.module.css";

export default function Options({  change, reset, total }) {
   
    return (
        <div className={css.div}>
            <button className={css.button} type="button" onClick={() => change("good")}>good</button>
            <button className={css.button} type="button" onClick={() => change("neutral")}>neutral</button>
            <button className={css.button} type="button" onClick={() => change("bad")}>bad</button>
           {total > 0 && <button type="button" onClick={reset}>Reset</button>}
        </div>
    );
}
