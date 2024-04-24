export const dynamic = 'force-dynamic' // defaults to auto

let cards = [
    {
        "id": 1,
        "title": "Это заголовок",
        "text": "Это текст. Его много...",
        "price": 1000,
        "image": "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg"
    }
];

export async function GET() {
    return new Response(JSON.stringify(cards),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}