import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.titleBox}>
                <img className={styles.logoImgLeft} src="/public/rick-morty-freen.jpg" alt=""/>
                <img className={styles.nameLogo} src="/public/Rick_and_Morty.svg" alt=""/>
                <img className={styles.logoImgRight} src="/public/rick-morty-freen.jpg" alt=""/>
            </div>

        </header>
    )
}