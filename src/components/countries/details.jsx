
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../context/dataProvider';
import { useParams } from 'react-router-dom';
import { Country } from './country';
import { BsArrowLeft } from 'react-icons/bs';

export const Details = () => {
  const { data } = useContext(DataContext);
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    const country = data.find((country) => country.name === name);
    setCountry(country);
  }, [data, name]);

  useEffect(() => {
    const borders = country.borders?.map((border) => {
      const country = data.find((country) => country.alpha3Code === border);
      return country.name;
    });
    setBorders(borders);
  }, [country, data]);

  const {
    flag,
    name: countryName,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = country;

  return (
    <div className="details">
      <button
        className="details__btn"
        onClick={() => {
          window.history.back();
        }}
      >
        <BsArrowLeft /> Back
      </button>
      <div className="details__country">
        <img src={flag} alt={countryName} />
        <div className="details__info">
          <h2>{countryName}</h2>
          <div className="details__info__container">
            <div className="details__info__left">
              <p>
                <strong>Native Name:</strong> {nativeName}
              </p>
              <p>
                <strong>Population:</strong> {population?.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {region}
              </p>
              <p>
                <strong>Sub Region:</strong> {subregion}
              </p>
              <p>
                <strong>Capital:</strong> {capital}
              </p>
            </div>
            <div className="details__info__right">
              <p>
                <strong>Top Level Domain:</strong> {topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {currencies?.map((currency) => currency.name).join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {languages?.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="details__borders">
            <p>
              <strong>Border Countries:</strong>
            </p>
            <div className="details__borders__countries">
              {borders?.map((border) => (
                <Country key={border} name={border} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



