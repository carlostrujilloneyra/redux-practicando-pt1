import { types } from "../types";

// Action que muestre la alerta:
export const handleShowAlert = (alert) => {
	return (dispatch) => {
		dispatch({
			type: types.mostar_alerta,
			payload: alert
		})
	}
}

// Action que oculte la alerta:
export const handleHideAlert = () => {
	return (dispatch) => {
		dispatch({
			type: types.ocultar_alerta
		})
	}
}