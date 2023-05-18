import { useEffect, useState } from "react";
import styles from "./css/DarkModeSlider.module.scss";

export const DarkModeSlider = () => {
    // I read the theme from local storage and set it onto body data attribute earlier in my code, so
    const [theme, setTheme] = useState(document.body.dataset.theme || "light");

    // sync the changed theme value to local storage and body data attribute
    useEffect(() => {
        if (theme && theme !== document.body.dataset.theme) {
            window.localStorage.setItem("theme", theme);
            document.body.dataset.theme = theme;
        }
    }, [theme]);

    return (
        <>
            <div className={styles.switch}>
                <input
                    type="checkbox"
                    className={styles.switch__input}
                    id="Switch"
                    onChange={(checked) => {
                        setTheme(!checked.target.checked ? "dark" : "light");
                    }}
                    checked={theme === "light"}
                />
                <label className={styles.switch__label} htmlFor="Switch">
                    <span className={styles.switch__indicator}></span>
                    <span className={styles.switch__decoration}></span>
                </label>
            </div>
        </>
    );
};

export default DarkModeSlider;
