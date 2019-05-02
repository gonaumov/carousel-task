import { match } from "react-router"

const items = (state: State, routeParams: match<{pageNumber: string | undefined}>): Array<Item> => {
   return state.items
}

export default items