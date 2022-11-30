import { FC, useState } from "react"
import ArrowDownIcon from "../../assets/icons/arrow-down-icon.svg"
import styles from "./SelectBox.module.scss"

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../store"
import { setSortBy, setFilterBy } from "../../store/reducers/search"

const sortByList = ["Date added", "Highest price", "Lowest price"]
const filterByList = ["Apartment", "Villa", "Townhouse"]

interface SelectBoxProps {
    variant: string;
}

const SelectBox: FC<SelectBoxProps> = ({ variant = "sort" }) => {
    const [showList, setShowList] = useState<boolean>(false)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)

    const { sortBy, filterBy, searchWord } = useSelector((state: RootState) => state.search)
    const dispatch = useDispatch()

    /* Select Sortby or Filterby */
    const handleSelect = (el: string) => {
        if (variant === "sort") {
            dispatch(setSortBy(el))
            dispatch({ type: "FETCH_DATA", payload: { sortBy: el, filterBy, searchWord } })
        } else {
            dispatch(setFilterBy(el))
            dispatch({ type: "FETCH_DATA", payload: { sortBy, filterBy: el, searchWord } })
        }
        setShowList(false)
        setShowOverlay(false)
    }

    return (
        <>
            {/* Select Box */}
            <div className={styles.select}>
                <button onClick={() => {
                    setShowList(true)
                    setShowOverlay(true)
                }}>
                    <h3>{variant === "sort" ? "Sort by" : "Type"}</h3>
                    <p>{variant === "sort" ? sortBy : filterBy}</p>
                    <img src={ArrowDownIcon} alt="down" />
                </button>

                {showList && (
                    <ul>
                        {(variant === "sort" ? sortByList : filterByList).map((el, idx) => (
                            <li key={idx} className={el === (variant === "sort" ? sortBy : filterBy) ? styles.active : ""} onClick={() => handleSelect(el)}>{el}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Overlay */}
            {showOverlay && (
                <div className={styles.overlay} onClick={() => {
                    setShowList(false)
                    setShowOverlay(false)
                }}
                />
            )}
        </>
    )
}

export default SelectBox
