import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
    id: number;
    image: string;
    name: string;
    gender: string;
    species: string
}

export const CharacterCard = ({ id, image, name, gender, species }: CharacterCardProps) => {
    return (
    <article className={styles.characterCard} key={id}>
        <img className={styles.avatar} src={image}/>
        <div>
            <p className={styles.name}> {name} </p>
            <p className={styles.gender}>{gender}</p>
            <p className={styles.gender}>{species}</p>
        </div>
    </article>
)
}
