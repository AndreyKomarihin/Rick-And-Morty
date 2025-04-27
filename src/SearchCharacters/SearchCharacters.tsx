import styles from "./SearchCharacters.module.css";

interface SearchCharactersProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchCharacters: React.FC<SearchCharactersProps> = ( { onChange } ) => {

return (
    <div>
        <input onChange={onChange} className={styles.searchCharacters} placeholder="Введи имя"/>
    </div>
)
}