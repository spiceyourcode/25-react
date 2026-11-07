import { useRef, useState } from "react";
import useOutsideClick from ".";
import styles from "./OutsideClick.module.css";

export default function UseOnClickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div className={styles['container']}>
            {showContent ? (
                <div ref={ref}>
                    <h1>This is a random content</h1>
                    <p>
                        Please click outside of this to close this. It would not close if
                        you do not click outside of this content
                    </p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )
            }
        </div >
    );
}
