import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero/index";
import SearchBar from "../components/SearchBar/index";
import Card from "../components/Card/index";
import { fuels, years } from "../constants";
import { useSearchParams } from "react-router-dom";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import ShowMore from "../components/ShowMore/index";

const MainPages = () => {
  const [cars, setCars] = useState<CarType[]>([]);

  const [params] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj).then((res: CarType[]) => setCars(res));
  }, [params]);
  return (
    <div>
      <Hero />

      <div
        id="catalogue"
        className="mt-12 padding-x padding-y max-w  max-w-[1440px] mx-auto"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Yıl" options={years} />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h1>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h1>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </div>
          </section>
        )}
        <ShowMore />
      </div>
    </div>
  );
};

export default MainPages;
