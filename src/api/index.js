//TODO: The stored api calls to be imported

import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

//Fetch Data for cards
export const fetchData = async () => {
    try {  //try block will execute if fetch is successful
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url); //destructuring the data instead of modifiedData block

return {confirmed, recovered, deaths, lastUpdate}

    } catch (error) {  //error handler
        console.log(error)
    }
}



//Fetch Data for Charts/line graph



//Fetch Data for CountryPicker