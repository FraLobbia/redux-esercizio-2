export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// REQUEST -> MOSTRO IL LOADER IN ATTESA DELLA RISPOSTa

export const fetcDataRequest = () => ({
	type: FETCH_DATA_REQUEST,
});
// response ho i dati e li userò
export const fetcDataSuccess = (data) => ({
	type: FETCH_DATA_SUCCESS,
	payload: data,
});
// gestione errore
export const fetcDataFailure = (error) => ({
	type: FETCH_DATA_FAILURE,
	payload: error,
});
