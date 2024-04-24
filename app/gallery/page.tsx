import Card from "../components/card";
import type { Metadata } from 'next'


async function getData() {
    const res = await fetch('http://localhost:3000/api/cards')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export const metadata: Metadata = {
    title: 'Галерея какая-то',
    description: 'Это пример страницы с галереей',
}



export default async function Page() {
    const cards = await getData();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-8 offset-2">
                    {cards.map(card => <Card title={card.title} text={card.text} price={card.price} image={card.image} key={card.id}></Card>)}
                </div>
            </div>
        </div>
    )
}