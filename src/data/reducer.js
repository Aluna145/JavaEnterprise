import {TYPES} from "./action-types";

const initialState = {
	username: '',
	currentlocation: '',
	cards: [{
		imageSrc: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris-0ae0bb626e.jpg',
		city: 'paris',
		fullCityName: 'Paris, Île-de-France, France',
		searchSrc: 'https://api.teleport.org/api/urban_areas/slug:paris/images/',
		price: "374",
		currency: "USD",
		dateTo: "2018-12-10",
		dateBack: "2018-12-12",
		weather: '+18℃',
		isExist:true,
		displayContent:'none',
		heightContent:0,
		visibilityContent:'hidden',
		displayImage:'block',
		dateandtime:'2018-12-12 10:30'
	}],
	currentCityError:false,
	newsIsLoading: false,
	newsLoadingFailed: false
};

const i = 0;
export const reducer = (prevState = initialState, action) => {
	const newState = {...prevState};

	console.log(action.data);
	switch (action.type) {

		case TYPES.DELETE_CARD:
			let flag2=true;
			for (let i = 0; i < newState.cards.length && flag2; i++) {
				if (newState.cards[i].city.toLowerCase() === action.data) {
					flag2 = false;
					newState.cards[i].isExist=false;
					newState.cards.splice(i,1);
					return{...newState,
						newsIsLoading: false,
						newsLoadingFailed: false
					};
				}
			}
			return{...newState}

		case TYPES.LOAD_NEWS_STARTED:
			console.log("LOAD_NEWS_STARTED");
			return {
				...newState,
				newsIsLoading: true,
				newsLoadingFailed: false,
				readyToWork:false,
				currentCityError:false
			};


		case TYPES.LOAD_USERNAME:
			return {
				...newState,
				newsIsLoading: false,
				newsLoadingFailed: false,
				readyToWork:true,
				username: action.data
			};


		case TYPES.LOAD_CURRENT_LOCATION:
			return {
				...newState,
				newsIsLoading: false,
				newsLoadingFailed: false,
				readyToWork:true,
				currentlocation: action.data
			};

//card toggle
		case TYPES.CARD_TOGGLE:
			let flag3=true;
			for (let i = 0; i < newState.cards.length && flag3; i++) {
					if (newState.cards[i].city.toLowerCase() === action.data) {
						if(newState.cards[i].heightContent===0)
						{newState.cards[i].heightContent=300;newState.cards[i].visibilityContent='visible'}
						else {newState.cards[i].heightContent=0;newState.cards[i].visibilityContent='hidden'}

						if(newState.cards[i].displayContent==='none')
							newState.cards[i].displayContent='block';else newState.cards[i].displayContent='none';
						if(newState.cards[i].displayImage==='none')
							newState.cards[i].displayImage='block';else newState.cards[i].displayImage='none';
							console.log(newState.cards[i].displayImage+" "+newState.cards[i].displayContent);
					flag3=false;
					}
					}
return{...newState,
	newsIsLoading: false,
	newsLoadingFailed: false
			};

			//load date and time
		case TYPES.LOAD_DATE_AND_TIME:
			let flag4=true;
			for (let i = 0; i < newState.cards.length && flag4; i++) {
				if (newState.cards[i].city.toLowerCase() === action.data.iana_name.toLowerCase()) {
					flag4=false;
					let dat=action.data._links['tz:offsets-now'].href;
					dat=dat.replace('https://api.teleport.org/api/timezones/iana:','');
					dat=dat.replace(action.data.iana_name,'');
					dat=dat.replace('/offsets/?date=','');
					dat=dat.replace('T',' ⏱ ');
					dat=dat.replace('Z','');
					newState.cards[i].dateandtime=dat;
				}
			}

					return{...newState,
						newsIsLoading: false,
						newsLoadingFailed: false,
						readyToWork:true,
			};

//create new card here!!!!
		case TYPES.LOAD_IMAGE:
			console.log("LOAD_IMAGE");
			let flag = true;
			let newCity = (action.data._links.self.href.replace('https://api.teleport.org/api/urban_areas/slug:', '').replace('/images/', '')).toLowerCase();
			for (let i = 0; i < newState.cards.length && flag; i++) {
				if (newState.cards[i].city.toLowerCase() === newCity.toLowerCase()) {
					flag = false;
				}
			}
			if (newState.currentlocation.toLowerCase() === newCity) {
				flag = false;
			}
			if (flag) {
				newState.cards.push({
					imageSrc: action.data.photos[0].image.mobile,
					searchSrc: action.data._links.self.href,
					fullCityName: 'City, Country',
					city: action.data._links.self.href.replace('https://api.teleport.org/api/urban_areas/slug:', '').replace('/images/', ''),
					currency: 0,
					dateTo: 'yyyy-mm-dd',
					dateBack: 'yyyy-mm-dd',
					price: '10000',
					weather: '+18℃',
					isExist:true,
					displayContent:'none',
					displayImage:'block',
					heightContent:0,
					visibilityContent:'hidden',
				})
			}
			if (!flag) {
				newState.newsIsLoading = false;
				newState.newsLoadingFailed = true;
				newState.readyToWork=false;
			} else {
				newState.newsIsLoading = false;
				newState.newsLoadingFailed = false;
				newState.readyToWork=true;
			}
			return {...newState};


		case TYPES.LOAD_FULL_CITY_NAME:
			console.log("LOAD_FULL_CITY_NAME");
			let cityTo = (action.data._links.self.href.replace('https://api.teleport.org/api/cities/?search=', '').replace('&geohash=', '')).toLowerCase();
			for (let i = 0; i < newState.cards.length; i++) {
				if (newState.cards[i].city.toLowerCase() === cityTo) {
					newState.cards[i].fullCityName = action.data._embedded['city:search-results'][0].matching_full_name;
					return {
						...newState,
						newsIsLoading: false,
						newsLoadingFailed: false,
						readyToWork:true
					};
				}
			}
			return {...newState};

		case TYPES.LOAD_FLIGHT_DATA:
			console.log("LOAD_FLIGTH: ");
			let lastElementIndex = newState.cards.length - 1;
			console.log(newState.cards[lastElementIndex].currency === 0);
			if (newState.cards[lastElementIndex].currency === 0) {
				console.log("Currency: ");
				console.log(action.data.currency);
				newState.cards[lastElementIndex].currency = action.data.currency;
				newState.cards[lastElementIndex].dateTo = action.data.results[0].departure_date;
				newState.cards[lastElementIndex].dateBack = action.data.results[0].return_date;
				newState.cards[lastElementIndex].price = action.data.results[0].price;
			}
			return {
				...newState,
				newsIsLoading: false,
				newsLoadingFailed: false,
				readyToWork:true
			};

		case TYPES.LOAD_NEWS_FAILED:
			return {
				...newState,
				newsIsLoading: false,
				newsLoadingFailed: true,
				readyToWork:false
			};
	}

	return newState
};