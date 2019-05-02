import { match } from "react-router"

const items = (state: State, routeParams: match<{pageNumber: string | undefined}>): Array<Item> => {
   const currentPage = routeParams.params.pageNumber ? parseInt(routeParams.params.pageNumber, 10) : 1
   const begin = ((currentPage - 1) * state.itemsPerPage)
   const end = begin + state.itemsPerPage
   return state.items.slice(begin, end)
}

export default items