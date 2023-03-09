import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import {
  CityName,
  CitySearch,
  WeatherName,
  WeatherWrapper,
  DateWrapper,
  IconStyled,
  DegStyled,
  ErrorMessage,
} from './WeatherApp.styled';

function Weather() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    data: {},
    error: false,
  });

  const toDate = () => {

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      setWeather({ ...weather });
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

      await axios
        .get(baseUrl, {
          params: {
            q: query,
            units: 'metric',
            appid: apiKey,
          },
        })
        .then(res => {
          setWeather({ data: res.data, error: false });
        })
        .catch(error => {
          setWeather({ ...weather, data: {}, error: true });
          setQuery('');
          console.log(error.message);
        });
    }
  };

  return (
    <WeatherWrapper>
      <WeatherName>{t('weatherTitle')}</WeatherName>
      <div>
        <CitySearch
          autoFocus
          type="text"
          placeholder={t('weatherSearch')}
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
          onKeyPress={search}
        />
      </div>

      {weather.error && (
        <ErrorMessage>
          <span>{t('weatherError')}</span>
        </ErrorMessage>
      )}

      {weather && weather.data && weather.data.main && (
        <div>
          <CityName>
            <h2>
              {weather.data.name}{' '}
              <span>
                {Math.round(weather.data.main.temp)}
                <DegStyled> &deg;C </DegStyled>
              </span>
            </h2>
          </CityName>
          <DateWrapper>
            <span>{toDate()}</span>
          </DateWrapper>
          <IconStyled>
            <img
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
          </IconStyled>
        </div>
      )}
    </WeatherWrapper>
  );
}

export default Weather;
