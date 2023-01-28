import type { ChangeEvent, FC } from 'react';
import type { Pokemon } from '@core/domain/pokemon';
import type { PokemonTypes } from '@core/types/pokemon-types';
import PokeList from '@molecule/poke-list';
import { useEffect, useState } from 'react';
import { getPokemonList } from '@core/adapters/get-pokemon-list';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import SelectInput from '@atom/select/select-input';
import { getSinglePokemon } from '@core/adapters/get-single-pokemon';
import { getPokemonTypeImage, PokemonTypeConfig } from '@core/const/pokemon-type';
import { getAbilities } from '@core/adapters/get-abilities';
import type { ResponseApi } from '@core/domain/response-api';
import type { ResultApi } from '@core/domain/result-api';
import Tag from '@atom/tag/tag';
import { AutocompleteInput } from '@atom/autocomplete-input/autocomplete-input';

const MainIsland: FC<any> = () => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [temp, setTemp] = useState<string>("");
  const [abilities, setAbilities] = useState<ResultApi[]>([]);

  const searchPokemonList = (filter= {}) => {
    setLoading(true);
    const params = new URLSearchParams(filter).toString()
    getPokemonList(params)
      .then((response: ResponseApi<Pokemon[]> ) => {
        setPokemonList(response.results);
        setLoading(false);
      })
    getAbilities()
      .then((response: ResponseApi<ResultApi[]>) => setAbilities(response.results))
  }

  useEffect(() => {
    searchPokemonList();
  }, []);

  useEffect(() => {
    if (!loading) {
      pokemonList.map((pokemon, index, originalList)  =>
        getPokemonDetails(pokemon.url)
          .then((response: Pokemon) => {
            originalList[index] = response;
            setPokemonList([...originalList]);
          })
      );
    }
  }, [loading]);

  const onChange= (a: ChangeEvent<HTMLInputElement>) => {
    searchPokemonList({limit: a.target.value, offset});
    console.log(a.target.value);
  }
  const algo = () => {
    setOffset(20);
    searchPokemonList({limit: 20, offset: 20});
  }
  const esto = () => {
    getSinglePokemon(temp)
      .then((pokemon: Pokemon) => setPokemonList([pokemon]));
  }

  return <>

    <div>{Object.keys(PokemonTypeConfig).map((type: string) => {
      const algo = PokemonTypeConfig[type as PokemonTypes];
      return <div key={type}>
        <Tag key={type} background={algo.color}>
          <img alt={type} style={{filter: 'brightness(120%)'}} src={getPokemonTypeImage(type as PokemonTypes)}/>
          {type}
        </Tag>
      </div>
    })}</div>
    <div>
    </div>
    {!!abilities &&
      <AutocompleteInput suggestions={abilities}>
        {suggestion =>
          <Tag key={suggestion.name}>{suggestion.name}</Tag>
        }
      </AutocompleteInput>
    }
    <input type="text" onChange={a => setTemp(a.target.value)}/>
    <button onClick={esto}>algo</button>
    <div onClick={algo}>eee</div>
    <SelectInput onSelect={onChange} />
    <PokeList pokemonList={pokemonList}/>
  </>

}

export default MainIsland;
