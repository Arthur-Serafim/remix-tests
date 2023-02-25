import { Link } from "@remix-run/react";
import DataLink from "~/components/DataLink";
import LoadingHandler from "~/components/LoadingHandler";
import usePokemonList from "~/hooks/usePokemonList";

const PokemonHome: React.FC = () => {
  const { data, loading } = usePokemonList();

  return (
    <div>
      <Link to="/">Return</Link>
      <h2>Pokemon</h2>
      <LoadingHandler loading={loading} />
      {data?.map((item) => (
        <DataLink key={item?.id} data={item} />
      ))}
    </div>
  );
};

export default PokemonHome;
