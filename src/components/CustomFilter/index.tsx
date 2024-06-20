import Select from "react-select";
import { OptionTypes } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionTypes[];
};
const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionTypes | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const key = title === "Yakıt Tipi" ? "fuel" : "year";

    if (selected?.value) {
      params.set(key, selected.value.toLowerCase());
    } else {
      params.delete(key);
    }
    setParams(params);
  }, [selected]);
  return (
    <div>
      <Select
        options={options}
        placeholder={title}
        className="text-black min-w-[120px]"
        onChange={(e) => setSelected(e)}
      />
    </div>
  );
};
export default CustomFilter;
