// src/App.js
import "./assets/dist/css/style.min.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
	fetchDataRequest,
	fetchDataSuccess,
	fetchDataFailure,
} from "./redux/actions";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function App({
	data,
	loading,
	error,
	fetchDataRequest,
	fetchDataSuccess,
	fetchDataFailure,
}) {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchData = async () => {
			fetchDataRequest();
			try {
				const response = await fetch(API_URL);
				const data = await response.json();
				//setTimeout(function() { //puoi commentare/decommentare questo timeout per attendere 5 secondi la risposta e mostrare il loader (insieme alla riga sotto)
				fetchDataSuccess(data);
				//}, 5000)
			} catch (error) {
				fetchDataFailure(error.message);
			}
		};
		fetchData();
	}, [fetchDataRequest, fetchDataSuccess, fetchDataFailure]);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			<ul>
				{data.length > 0 &&
					data.map((item) => <li key={item.id}> {item.title}</li>)}
			</ul>
		</div>
	);
}
//mapStateToProps, attraverso la quale passiamo le proprietà dell'oggetto State (lo stato globale dell'applicazione restituito dal rootReducer) al Container Component tramite l'oggetto props
const mapStateToProps = (state) => ({
	data: state.data,
	loading: state.loading,
	error: state.error,
});

const mapDispatchToProps = {
	fetchDataRequest,
	fetchDataSuccess,
	fetchDataFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
Metodo Connect -> collega React allo store
-> l'unico modo di comunicare con lo store è quello di inviare delle azioni e recuperare lo stato
// store.getState() in React - recupera ultimo stato - e store.dispatch() per inviare
// mapStateToProps e mapDispatchToProps restituiscono un oggetto e la chiave di questo oggetto diventa una props del componente collegato

// connect() -> restituisce una funzione che crea un ContainerComponent 

*/
