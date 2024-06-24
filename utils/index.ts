import { filterProps } from "@/types";

export async function fetchData(filters: filterProps) {

    const {manufacture, model, year, fuel, limit} = filters;
    const headers = {
        'x-rapidapi-key': 'f835dd4bfcmsh57b665ff1f49895p1e5fbejsn4ebbfcb30c47',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacture}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    })

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    return newPathName
}