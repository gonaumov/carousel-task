import { match } from "react-router"

const disabled = (state: State, routeParams: match<{pageNumber: string | undefined}>): disabled => {
   const currentPage = routeParams.params.pageNumber ? parseInt(routeParams.params.pageNumber, 10) : 1
   const numberOfPages = Math.ceil(state.items.length / state.itemsPerPage)
   return {
      next: currentPage === numberOfPages,
      previous: currentPage === 1
   }
}

export default disabled