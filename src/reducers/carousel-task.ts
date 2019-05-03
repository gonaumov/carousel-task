import { AnyAction } from "redux";
import initialState from "../initialState";
import { UPDATE_ITEMS_PER_PAGE } from '../constants'

const carouselTask = (state: State = initialState, action: AnyAction) => {
	switch (action.type) {
	  case UPDATE_ITEMS_PER_PAGE: 
	    return {
		   ...state,
		   itemsPerPage: action.payload.itemsPerPage
		}	
	  default:
	    return state
	}
}

export default carouselTask
