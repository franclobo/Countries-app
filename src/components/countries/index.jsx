import { useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import { Country } from "./Country";

export const Countries = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="countries">
      {data.map((country) => (
        <Country
          key={country.name}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
};
