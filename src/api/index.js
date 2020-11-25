//TODO: The stored api calls to be imported

import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

//Fetch Data for cards
export const fetchData = async (country) => {
let changeableUrl = url;

if (country) {
    changeableUrl = `${url}/countries/${country}`
}

    try {  //try block will execute if fetch is successful
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl); //destructuring the data instead of modifiedData block

return {confirmed, recovered, deaths, lastUpdate}

    } catch (error) {  //error handler
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}


//Fetch Data for CountryPicker
export const fetchCountries = async () =>{
    try {
        const { data: {countries} } = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name)
    } catch (error) {
        console.log("Error from fetchCountries:", error)
    }
}