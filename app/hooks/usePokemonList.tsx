import { useEffect, useState } from "react";
import type { ListDataResponse } from "~/types";

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Array<ListDataResponse>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetch("https://pokeapi.co/api/v2/pokemon");
      const parsedData = await data?.json();
      setPokemonList(
        parsedData?.results?.map((item: any) => ({
          id: item?.name,
          name: item?.name,
          type: "pokemon",
        }))
      );
      setLoading(false);
    })();
  }, []);

  return { data: pokemonList, loading: loading };
};

export default usePokemonList;
