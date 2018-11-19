# TIBO: 	Travel Inspiration BOard!
###  Description
Here you can add (follow) cities that you plan to visit,
see and compare information from different cities to decide your next trip. Not enought inspiration
to visit this or that city? Go and see pictures.

**For now you can add (follow) city card and see next information:**

	•   picture with views of city
	•   country
	•   monthly weather
	•   current weather
	•   currency
	•   official language
	•   current date and time
	•   approximate flight cost from your location to desired city and dates for this cost

Also, if you don't like city anymore, you can unfollow (delete from your board).

**For future you will:**

	•   see weather monthly graph to plan your farther trips
	•   see more city pictures, life videos
	•   see upcoming events
	•   see unsafe places (which will be highlighted in red), recommended places (which will be highlighted in blue; "recommendedness" based on system data: cost, weather, city traffic, etc.)
	•   compose your travel history (we plan to add worldwide map)
	•   choose date "TO FROM" yourself
	•   filter ticket cost: "the cheapest flight ticket", "flight ticket with luggage"
	•   change design themes
	•   for the distant future you will:
	•   add the information you consider necessary to the city cards; 
	Perhaps your card will be the most informative and will be liked by other users.
					
## API

 - [Teleport public API](https://developers.teleport.org/api/)
 - [Amadeus API](https://sandbox.amadeus.com/api-catalog)
## SIMPLE USAGE
##### Each response is JSON encoded.
[Documentation for Teleport public API](https://developers.teleport.org/api/reference/)

[Documentation for Amadeus API](https://sandbox.amadeus.com/getting-started)

**REQUEST (Amadeus API):**
```
GET https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=log%20in%20to%20retrieve%20API%20key&origin=NYC
```
**apikey**      - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.

**origin**      - IATA code of the city from which the traveler will depart. See the location and airport interfaces for more information.

**RESPONCE (Amadeus ):**
```
{
  "origin": "NYC",
  "currency": "USD",
  "results": [
    {
      "destination": "MOW",
      "departure_date": "2019-01-15",
      "return_date": "2019-01-22",
      "price": "473.67",
      "airline": "UA"
    }
  ]
}

```

**origin**	The IATA code of the city from which all proposed price results depart

**currency**	The ISO 4217 currency code that will be used for all prices in this response	

**results** 	- An array of result objects, each summarizing an itinerary from the above origin to a potential destination for the traveler

**destination** 	- The IATA code of the city or airport to which the traveler may go, from the provided origin	

**departure_date**	     - The date departure at the origin, in ISO 8601 date format yyyy-MM-dd, to go to the above destination	

**return_date**	    - The date at which the flight from the destination to the origin will arrive at the origin. The date is in ISO 8601 date format yyyy-MM-dd, in the local date of the origin

**price**	- The minimum total price for one adult passenger for a round trip from the origin to the destination and back. Always a string, formatted correctly for the provided currency	

**airline** 	- The 2 character alphanumeric IATA airline code of the airline that is responsible for selling the traveler this flight - also known as the Validating Carrier. See the airlines API for more information	