interface Item {
    id: string
    description: string
    image: string
    price: number
    isSelected: boolean
}

interface State {
    items: Array<Item>
    itemsPerPage: 1 | 4
}

interface disabled {
    next: boolean
    previous: boolean
}