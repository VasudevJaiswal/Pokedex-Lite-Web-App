import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Search from './components/Search';
import Filter from './components/Filter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filterOptions, setFilterOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );

        Promise.all(promises).then((detailedData) => {
          setPokemonList(detailedData);
          setFilteredData(detailedData);

          const uniqueTypes = [
            ...new Set(detailedData.flatMap((pokemon) => pokemon.types.map((type) => type.type.name)))
          ];
          setFilterOptions(['All', ...uniqueTypes.sort()]);
        });
      })
      .catch((error) => console.error('Error fetching Pokémon data:', error));
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = pokemonList
      .filter((pokemon) => filter === 'All' || pokemon.types.some((t) => t.type.name === filter))
      .filter((pokemon) => pokemon.name.toLowerCase().includes(lowerCaseSearchTerm));

    setFilteredData(filtered);
  }, [filter, pokemonList, searchTerm]);

  const toggleFavorite = (pokemon) => {
    const updatedFavorites = favorites.includes(pokemon.name)
      ? favorites.filter((fav) => fav !== pokemon.name)
      : [...favorites, pokemon.name];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <Header />
      <div className="controls">
        <Search setSearchTerm={setSearchTerm} />
        <Filter filterOptions={filterOptions} setFilter={setFilter} />
      </div>
      <CardContainer data={filteredData} toggleFavorite={toggleFavorite} favorites={favorites} />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;