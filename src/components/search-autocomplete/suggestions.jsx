import styles from "./SearchAutoComplete.module.css";

export default function Suggestions({ data }) {
    return (
        <ul className={styles['list']}>
            {data && data.length
                ? data.map((item, index) => <li key={index}> {item}</li>)
                : <div> No name found!</div>
            }
        </ul>
    )


}