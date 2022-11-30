import styles from "./Skeleton.module.scss"

const Skeleton = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.image}></div>
            <div>
                <div className={styles.title} />
                <div className={styles.description} />
                <div className={styles.description} />
            </div>
        </div>
    )
}

export default Skeleton
