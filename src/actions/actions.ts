import { UPDATE_ITEMS_PER_PAGE } from '../constants'

export const updateItemsPerPage = (itemsPerPage: number) => ({
    type: UPDATE_ITEMS_PER_PAGE,
    payload: {
        itemsPerPage
    }
})