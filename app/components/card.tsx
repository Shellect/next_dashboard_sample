import {CardsType} from "../lib/definitions";
import Image from "next/image";

export default function Card({title, text, price, image}: CardsType) {
    return (
        <div className="card text-bg-dark">
            <Image src={image} className="card-img" alt=""/>
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text"><small>{price} ₽</small></p>
            </div>
        </div>
    )
}