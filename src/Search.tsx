import { FC, useEffect, useState } from "react"
import ArrowDownIcon from "./assets/icons/arrow-down-icon.svg"
import SearchIcon from "./assets/icons/search-icon.svg"
import PositionIcon from "./assets/icons/position-icon.svg"
import Image01 from "./assets/images/image-1.jpg"
import Image02 from "./assets/images/image-2.jpg"
import Image03 from "./assets/images/image-3.jpg"
import Image04 from "./assets/images/image-4.jpg"
import styles from "./Search.module.scss"

const HomeData = [
  {
    id: 1,
    image: Image01,
    type: "villa",
    name: "Luxe villa in Alicante",
    address: "Murcia, Costa Cálida, Spanje",
    bedroom: 3,
    bathroom: 2,
    price: 550,
    addedAt: "2022-10-25"
  },
  {
    id: 2,
    image: Image02,
    type: "apartment",
    name: "Luxe apartment in Paris",
    address: "Paris, France",
    bedroom: 3,
    bathroom: 2,
    price: 750,
    addedAt: "2022-11-25"
  },
  {
    id: 3,
    image: Image03,
    type: "apartment",
    name: "Apartment in London",
    address: "London, UK",
    bedroom: 2,
    bathroom: 1,
    price: 450,
    addedAt: "2021-09-25"
  },
  {
    id: 4,
    image: Image04,
    type: "townhouse",
    name: "Townhouse in New York",
    address: "New York, US",
    bedroom: 3,
    bathroom: 2,
    price: 350,
    addedAt: "2021-07-20"
  },
  {
    id: 5,
    image: Image02,
    type: "villa",
    name: "Villa in Santiago de la Ribera, Costa Cálida, Spanje",
    address: "Santiago de la Ribera, Costa Cálida, Spanje",
    bedroom: 3,
    bathroom: 2,
    price: 600,
    addedAt: "2022-10-25"
  },
  {
    id: 6,
    image: Image03,
    type: "townhouse",
    name: "Townhouse in Costa Cálida, Spanje",
    address: "Santiago de la Ribera, Spanje",
    bedroom: 4,
    bathroom: 2,
    price: 900,
    addedAt: "2020-10-25"
  }
]

const SortBy = ["Date added", "Highest price", "Lowest price"]
const FilterBy = ["Appartment", "Villa", "Townhouse"]

const Search: FC = () => {
  const [showSorts, setShowSorts] = useState<boolean>(false)
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [showOverlay, setShowOverlay] = useState<boolean>(false)

  /* Select Sort By */
  const [sort, setSort] = useState<string>("Highest price")
  const handleSortBy = (el: string) => {
    setSort(el)
    setShowSorts(false)
    setShowOverlay(false)
  }

  /* Select Filter By */
  const [filter, setFilter] = useState<string>("Villa")
  const handleFilterBy = (el: string) => {
    setFilter(el)
    setShowFilters(false)
    setShowOverlay(false)
  }

  /* Search Name and Address */
  const [searchWord, setSearchWord] = useState<string>("")
  const handleSearch = () => {
    if (searchWord !== "") {
      console.log("SEARCH_BY: ", searchWord)
    }
  }

  /* Watch States Change */
  useEffect(() => {
    console.log("SHOW_OVERLAY: ", showOverlay)
  }, [showOverlay])

  useEffect(() => {
    console.log("SHOW_SORT: ", showSorts)
  }, [showSorts])

  useEffect(() => {
    console.log("SHOW_FILTER: ", showFilters)
  }, [showFilters])

  useEffect(() => {
    console.log("SORT_BY: ", sort)
  }, [sort])

  useEffect(() => {
    console.log("Filter_BY: ", filter)
  }, [filter])

  useEffect(() => {
    console.log("SEARCH_BY: ", searchWord)
  }, [searchWord])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.condition}>
          {/* Sort by */}
          <div className={styles.select}>
            <button onClick={() => {
              setShowSorts(true)
              setShowOverlay(true)
            }}>
              <h3>Sort by</h3>
              <p>{sort}</p>
              <img src={ArrowDownIcon} alt="down" />
            </button>

            {showSorts && (
              <ul>
                {SortBy.map((el, idx) => (
                  <li key={idx} className={el === sort ? styles.active : ""} onClick={() => handleSortBy(el)}>{el}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Filter by */}
          <div className={styles.select}>
            <button onClick={() => {
              setShowFilters(true)
              setShowOverlay(true)
            }}>
              <h3>Type</h3>
              <p>{filter}</p>
              <img src={ArrowDownIcon} alt="down" />
            </button>
            {showFilters && (
              <ul>
                {FilterBy.map((el, idx) => (
                  <li key={idx} className={el === filter ? styles.active : ""} onClick={() => handleFilterBy(el)}>{el}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Overlay */}
          {showOverlay && (
            <div className={styles.overlay} onClick={() => {
              setShowSorts(false)
              setShowFilters(false)
              setShowOverlay(false)
            }}>
            </div>
          )}
        </section>

        <section className={styles.content}>
          <div className={styles.search}>
            <div>
              <img src={SearchIcon} alt="search" />
              <input
                type="text"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                placeholder="Plaats, buurt, adres, etc."
                autoFocus
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>

          {HomeData.map((el, idx) => (
            <div key={idx} className={styles.item}>
              <img className={styles.image} src={el.image} alt={el.name} />
              <div>
                <h3>{el.name}</h3>
                <p>
                  <img src={PositionIcon} alt="position" />
                  <span>{el.address}</span>
                </p>
                <p>
                  <span>{el.bedroom} Slaapkamers</span>
                  <span>•</span>
                  <span>{el.bathroom} Badkamers</span>
                </p>
                <h4>€ {el.price.toFixed(3)}</h4>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Search
