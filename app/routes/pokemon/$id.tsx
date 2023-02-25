import { Link, useParams } from "@remix-run/react";
import DataCard from "~/components/DataCard";
import LoadingHandler from "~/components/LoadingHandler";
import usePokemonData from "~/hooks/usePokemonData";

const Pokemon: React.FC = () => {
  const params = useParams();
  const { data, loading } = usePokemonData({ id: params.id || "" });
  return (
    <div>
      <Link to="/pokemon">Return</Link>
      <LoadingHandler loading={loading} />
      {!!data && <DataCard data={data} />}
    </div>
  );
};

export default Pokemon;
