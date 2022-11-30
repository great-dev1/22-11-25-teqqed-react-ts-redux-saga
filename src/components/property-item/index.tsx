import { FC } from "react"
import PositionIcon from "../../assets/icons/position-icon.svg"
import styles from "./PropertyItem.module.scss"

interface PropertyItemProps {
    property: any
}

const PropertyItem: FC<PropertyItemProps> = ({ property }) => {
    return (
        <div className={styles.property}>
            <img className={styles.image} src={property.image} alt={property.name} />
            <div>
                <h3>{property.name}</h3>
                <p>
                    <img src={PositionIcon} alt="position" />
                    <span>{property.address}</span>
                </p>
                <p>
                    <span>{property.bedroom} Slaapkamers</span>
                    <span>•</span>
                    <span>{property.bathroom} Badkamers</span>
                </p>
                <h4>€ {property.price.toFixed(3)}</h4>
            </div>
        </div>
    )
}

export default PropertyItem
