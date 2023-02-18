import { types } from "../types"

const initialState = {
	alert: null
}

export const alertaReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.mostar_alerta:

			return {
				...state,
				alert: action.payload
			}
	
		default:
			return state;
	}
}