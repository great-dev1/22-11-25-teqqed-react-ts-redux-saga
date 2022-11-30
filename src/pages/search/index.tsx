import { FC, useEffect } from "react"
import SelectBox from "../../components/select-box"
import SearchBox from "../../components/search-box"
import PropertyItem from "../../components/property-item"
import Skeleton from "../../components/skeleton"
import styles from "./Search.module.scss"

import type { RootState } from "../../store"
import { useSelector, useDispatch } from "react-redux"

const Search: FC = () => {
  /* Redux Store States */
  const { sortBy, filterBy, searchWord, result, loading } = useSelector((state: RootState) => state.search)
  const dispatch = useDispatch()

  /* Init on Mount */
  useEffect(() => {
    dispatch({ type: "FETCH_DATA", payload: { sortBy, filterBy, searchWord } })
  }, [])

  const renderSkeleton = (count: number) => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push(<Skeleton />)
    }
    return temp
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.select}>
          <SelectBox variant="sort" />
          <SelectBox variant="filter" />
        </section>

        <section className={styles.content}>
          <SearchBox />

          {loading ? (
            renderSkeleton(4)
          ) : (
            result.length === 0 ? (
              <p className="text-center">No result</p>
            ) : (
              result.map((el) => (
                <PropertyItem key={el.id} property={el} />
              ))
            )
          )}
        </section>
      </main>
    </div>
  )
}

export default Search
