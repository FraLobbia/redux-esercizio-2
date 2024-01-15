import {
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
} from "./actions";

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const dataReduce = (state = initialState, action) => {
	switch (action.type) {
		// avvio richiesta lo state immutato ma loading true
		case FETCH_DATA_REQUEST:
			return {
				...state,
				loading: true,
			};

		// fine ricezione risposta loading false e metto i dati nell'array
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			};

		// errore loading è ancora false, dati vuoti, oggetto errore valorizzato
		case FETCH_DATA_FAILURE:
			return {
				...state,
				loading: false,
				data: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

export default dataReduce;
