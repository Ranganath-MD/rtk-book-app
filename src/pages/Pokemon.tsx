/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetPokemonQuery } from "../services/pokemon";

export default function Pokemon() {
  const { data, isLoading } = useGetPokemonQuery();

  return (
    <ul>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {data.map((pokemon: any) => {
            return (
              <li key={pokemon.name}>
                <h1>{pokemon.name}</h1>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
}
