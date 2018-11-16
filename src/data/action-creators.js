import {TYPES} from "./action-types";
import axios from "axios";


//delete card
export const deleteCard = (city) => (dispatch) => {
	dispatch({type: TYPES.LOAD_NEWS_STARTED});
	dispatch({
		type: TYPES.DELETE_CARD,
		data: city
	});
};

//card toggle
export const cardToggle=(city)=>(dispatch)=>{
	dispatch({type: TYPES.LOAD_NEWS_STARTED});
	dispatch({
		type: TYPES.CARD_TOGGLE,
		data: city
	});
};

let cityCodeFrom = '';

//set user and current user location
export const setUser = () => (dispatch, getState) => {
	const formData = getState().form.citylocation.values;
	const {name, location} = formData;
	dispatch({
		type: TYPES.LOAD_USERNAME,
		data: name
	});
	cityCodeFrom = location;
	dispatch({
		type: TYPES.LOAD_CURRENT_LOCATION,
		data: location
	})
};

//load price
export const loadNews = () => (dispatch, getState) => {
	dispatch({type: TYPES.LOAD_NEWS_STARTED});

	const formData = getState().form.search.values;
	console.log(formData);
	const {city} = formData;

//get city IATA code by city name "FROM"
	cityCodeFrom = cityCodeFrom.toLowerCase().charAt(0).toUpperCase() + cityCodeFrom.toLowerCase().slice(1);
	let cityCodeCurrentLocation = citynameToCode(cityCodeFrom);


	//get city IATA code by city name "TO"
	let cityTo = city.toLowerCase().charAt(0).toUpperCase() + city.toLowerCase().slice(1);
	cityTo = citynameToCode(cityTo);

	//load picture
	axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase()}/images`)
		.then((response) => {
			// Dispatching an action only when request complete
			dispatch({
				type: TYPES.LOAD_IMAGE,
				data: response.data
			});
			//load full name (city and country) of city
			axios.get(`https://api.teleport.org/api/cities/?search=${city.toLowerCase()}&limit=1`)
				.then((response) => {
					dispatch({
						type: TYPES.LOAD_FULL_CITY_NAME,
						data: response.data
					});
					dispatch({type: TYPES.LOAD_NEWS_STARTED});
				})
				.catch((e) => {
					dispatch({type: TYPES.LOAD_NEWS_FAILED, error: e});
				});
			axios.get(`https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=k35nI2GlvlnGipzqegHTS9FKAPkRNbyA&origin=${cityCodeCurrentLocation}&destination=${cityTo}&duration=10--15`)
				.then((response) => {
					dispatch({
						type: TYPES.LOAD_FLIGHT_DATA,
						data: response.data
					});
				})
				.catch((e) => {
					dispatch({type: TYPES.LOAD_NEWS_FAILED, error: e});
				});
			axios.get(`https://api.teleport.org/api/timezones/iana:${city}`)
				.then((response) => {
					dispatch({
						type: TYPES.LOAD_DATE_AND_TIME,
						data: response.data
					});
				})
				.catch((e) => {
					dispatch({type: TYPES.LOAD_NEWS_FAILED, error: e});
				});
		})
		.catch((e) => {
			dispatch({type: TYPES.LOAD_NEWS_FAILED, error: e});
		});
};

//city name to IATA code
export const citynameToCode = (cityname) => {
	let cityCode = '';
	switch (cityname) {
		case 'Paris':
			cityCode = 'PAR';
			break;
		case 'London':
			cityCode = 'LON';
			break;
		case 'Berlin':
			cityCode = 'BER';
			break;
		case 'Bucharest':
			cityCode = 'BUH';
			break;

		case 'Buenos Aires':
			cityCode = 'BUE';
			break;

		case 'Chicago':
			cityCode = 'CHI';
			break;

		case 'Jakarta':
			cityCode = 'JKT';
			break;

		case 'Milan':
			cityCode = 'MIL';
			break;

		case 'Miami':
			cityCode = 'MIA';
			break;

		case 'Montreal':
			cityCode = 'YMQ';
			break;

		case 'Moscow':
			cityCode = 'MOW';
			break;

		case 'New York City':
			cityCode = 'NYC';
			break;

		case 'Osaka':
			cityCode = 'OSA';
			break;

		case 'Rio de Janeiro':
			cityCode = 'RIO';
			break;

		case 'Rome':
			cityCode = 'ROM';
			break;

		case 'São Paulo':
			cityCode = 'SAO';
			break;

		case 'Sapporo':
			cityCode = 'SPK';
			break;

		case 'Seoul':
			cityCode = 'SEL';
			break;

		case 'Stockholm':
			cityCode = 'STO';
			break;

		case 'Tokyo':
			cityCode = 'TYO';
			break;

		case 'Toronto':
			cityCode = 'YTO';
			break;

		case 'Washington':
			cityCode = 'WAS';
			break;

		case 'Bangkok':
			cityCode = 'BKK';
			break;

		case 'Beijing':
			cityCode = 'BJS';
			break;

		case 'Dallas':
			cityCode = 'DFW';
			break;

		case 'Dubai':
			cityCode = 'DXB';
			break;

		case 'Houston':
			cityCode = 'HOU';
			break;

		case 'Johannesburg':
			cityCode = 'JNB';
			break;

		case 'Kiev':
			cityCode = 'IEV';
			break;

		case 'Kuala Lumpur':
			cityCode = 'KUL';
			break;

		case 'Medellín':
			cityCode = 'MDE';
			break;

		case 'Nagoya':
			cityCode = 'NGO';
			break;

		case 'Shanghai':
			cityCode = 'SHA';
			break;

		case 'Taipei':
			cityCode = 'TPE';
			break;

		case 'Tehran':
			cityCode = 'THR';
			break;
	}
	return cityCode;
};



