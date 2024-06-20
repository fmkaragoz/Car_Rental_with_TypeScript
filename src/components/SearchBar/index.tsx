import ReactSelect from "react-select";
import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { OptionTypes } from "../../types";
import { makes } from "../../constants/index";

type ButtonProps = {
  styling: string;
};
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [params, setParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };

  const options: OptionTypes[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    []
  );
  return (
    <form className="searchbar  gap-3" onSubmit={handleSubmit}>
      <div className="searchbar__item text-black">
        <ReactSelect
          className="w-full"
          options={options}
          onChange={(e) => e && setMake(e.value)}
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          width={25}
          className="absolute ml-4"
          alt=""
        />
        <input
          type="text"
          onChange={(e) => setModel(e.target.value)}
          placeholder="Ör:Bmw"
          className="searchbar__input rounded text-black"
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <SearchButton styling={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
