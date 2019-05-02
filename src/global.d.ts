interface Item {
    description: string
    image: string
    price: number
}

interface State {
    items: Array<Item>
    pageNumber: number | null
}