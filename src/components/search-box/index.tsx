import { FC, useState } from "react"
import SearchIcon from "../../assets/icons/search-icon.svg"
import SpinnerIcon from "../../assets/icons/spinner-icon.svg"
import styles from "./SearchBox.module.scss"

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../store"
import { setSearchWord } from "../../store/reducers/search"

const SearchBox: FC = () => {
    const { sortBy, filterBy, searchWord, loading } = useSelector((state: RootState) => state.search)
    const dispatch = useDispatch()

    /* Search for Name and Address */
    const [search, setSearch] = useState<string>(searchWord)
    const handleSearch = () => {
        dispatch(setSearchWord(search))
        dispatch({ type: "FETCH_DATA", payload: { sortBy, filterBy, searchWord: search } })
    }

    return (
        <div className={styles.search}>
            <div>
                <img src={SearchIcon} alt="search" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Plaats, buurt, adres, etc."
                    autoFocus
                />
            </div>
            <button className={loading ? styles.loading : ""} onClick={handleSearch}>
                {loading ? <img className={styles.spinner} src={SpinnerIcon} alt="spinner" /> : "Search"}
            </button>
        </div>
    )
}

export default SearchBox
