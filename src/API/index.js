import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changableUrl = url;

    if(country) {
        changableUrl = `${url}/countries/${country}`
    }
    try {
        const {data: {confirmed, recovered, deaths, }} = await axios.get(changableUrl);


        return { confirmed, recovered, deaths, };
    } catch (error) {
        console.log(error);

    }
}

export const fetchCountries = async () => {
    try {
        const { data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name)
    }catch (error) {
        console.log(error);
    }
}

