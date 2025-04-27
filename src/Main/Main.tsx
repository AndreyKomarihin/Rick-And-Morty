import styles from "./Main.module.css"
import {SearchCharacters} from "../SearchCharacters/SearchCharacters.tsx";
import {CharacterCard} from "../CharacterCard/CharacterCard.tsx";
import {useEffect, useState} from "react";

interface CharacterProps {
    id: number
    name: string
    status: string
    species: string
    image: string
    gender: string
}

interface InfoProps {
    count: number
    pages: number
    next: string
    prev: string
}

interface ApiResponse {
    results: CharacterProps[];
    info: InfoProps[];
}

export const Main = () => {
    const [value, setValue] = useState('')

    const [backArr, setBackArr] = useState<ApiResponse | undefined>()
    const [pages, setPages] = useState<number[]>([])

    const [selectedPage, setSelectedPage] = useState(1)

    async function getResponse() {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}&page=${selectedPage}`)
        const characterList = await response.json()
        setBackArr(characterList)
        console.log(backArr)

        if (characterList.info?.pages) {
            const totalPages = characterList.info.pages;
            const allPages = [];
            for (let i = 1; i <= totalPages; i++) {
                allPages.push(i);
            }
            setPages(allPages);
        }
    }

    useEffect(()  => {getResponse()},[value, selectedPage])

    return (
        <main className={styles.main}>

            <h1 className={styles.title}>Want to know about your favorite <span className={styles.titleText}>Rick and Morty</span> character? <br/> Enter
                his name in the search and you will understand him
                much more!</h1>
            <img className={styles.rick} src='/public/1664161371_1-zefirka-club-p-rik-bez-fona-2.png' alt='logo'/>
            <SearchCharacters onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}/>
            <div className={styles.characterCardContainer}>{backArr?.results?.map((character) => {
                return (
                    <CharacterCard key={character.id}
                                   id={character.id}
                                   image={character.image}
                                   name={character.name}
                                   gender={character.gender}
                                   species={character.species}
                    />
                )
            })}
            </div>
            <div className={styles.arrowContainer}>
            <button
                className={styles.arrowBtn}
                onClick={() => setSelectedPage(selectedPage - 1)}
            ><img className={styles.prevArrow} src='public/blue-arrow-60-408x198.png'/>
            </button>
            <button
                className={styles.arrowBtn}
                onClick={() => setSelectedPage(selectedPage + 1)}
            ><img className={styles.nextArrow} src='public/blue-arrow-60-408x198.png'/>
            </button>
            </div>
            <div className={styles.paginationContainer}>
                {pages?.map((page) => (
                    <button
                        key={page}
                        onClick={() => setSelectedPage(page)}
                        className={`${styles.paginationNumber} ${selectedPage === page ? styles.paginationNumberActive : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </main>
    )
}