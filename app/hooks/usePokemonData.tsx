import { useEffect, useState } from "react";
import type { DataResponse, UseDataInput } from "~/types";

interface PokemonDataApiResponse {
  name: string;
  sprites: { front_default: string };
}

const usePokemonData = ({ id }: UseDataInput) => {
  const [pokemonData, setPokemonData] = useState<DataResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const parsedData: PokemonDataApiResponse = await data?.json();

      setPokemonData({
        name: parsedData?.name || "",
        image: parsedData?.sprites?.front_default || "",
      });
      setLoading(false);
    })();
  }, []);

  return { data: pokemonData, loading: loading };
};

export default usePokemonData;
