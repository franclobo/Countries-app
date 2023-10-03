# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

| Desktop version | Mobile version |
|---|---|
| ![image](https://github.com/franclobo/Countries-app/assets/58642949/44cc8bf7-5680-427c-9ab3-71eed302a373) | ![image](https://github.com/franclobo/Countries-app/assets/58642949/695fea38-bee5-414e-9554-85e4813021af) |



### Links

- Solution URL: [GitHub](https://github.com/franclobo/Countries-app)
- Live Site URL: [Netlify](https://rest-countries-info-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React Vite](https://vitejs.dev/guide/)
- [Styled Components](https://ant.design/components/overview/) - For styles

### What I learned

I used some new hooks loke useContext, useLocation to develop this app. I also learned how to use the react-router-dom library to create a multi-page app.

```js
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

```
### Continued development

Correct search input and filter.

### Useful resources

- [React documentation](https://react.dev/reference/react/createContext) - This helped me for create context to use the JSON file.

## Author

- Website - [Webminds Studio](https://webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the challenge.
