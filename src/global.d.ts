interface Item {
    description: string
    image: string
    price: number
}

interface State {
    items: Array<Item>
    itemsPerPage: 1 | 4
}

interface disabled {
    next: boolean
    previous: boolean
}