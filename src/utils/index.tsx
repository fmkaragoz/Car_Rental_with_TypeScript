import { colors } from "../constants";
import { CarType, filterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "386ce52a71msh4a443d37e22d4d3p1c029fjsneb7976560c98",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: filterType) {
  const {
    make = "bmw",
    model = "",
    limit = "",
    year = "",
    fuel = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel}`,
    options
  );

  return await res.json();
}

export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  return String(url);
};
