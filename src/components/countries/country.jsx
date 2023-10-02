import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/dataProvider';

export const Country = ({
  name,
  population,
  region,
  capital,
 }) => {
  const { data } = useContext(DataContext);
  const country = data.find((country) => country.name === name);
  const { flag } = country;

  return (
    <Link to={`/details/${name}`} className="country">
      <img src={flag} alt={name} />
      <div className="country__info">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population?.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </Link>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};
