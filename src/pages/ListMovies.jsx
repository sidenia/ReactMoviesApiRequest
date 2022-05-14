import React, { useEffect, useState} from 'react';
import { Grid } from '@material-ui/core';
import api from '../services/api';
import '../assets/css/App.css'
import Title from '../components/Title';
import AppNav from '../components/AppNav';
import FilmeCard from '../components/FilmeCard';

export function ListMovies (props) {
  const [movies, setMovies] = useState([]);

  async function getMovies(){
    const response = await api.get(props.url);
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return(
    <>
      <AppNav/>
      <header>
        <Title text="StarWars Movies"/>
      </header>
      <Grid container spacing={24} justify="center">
        {movies.map((movie) =>{
          let movieImage = movie.show.image.medium
          return <FilmeCard name={movie.show.name} rota={movie.show.url} image={movieImage}/>
        })};
      </Grid>
    </>
  );
}