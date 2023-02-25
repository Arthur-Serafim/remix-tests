import { Link } from "@remix-run/react";
import DataLink from "~/components/DataLink";
import LoadingHandler from "~/components/LoadingHandler";
import useMagicList from "~/hooks/useMagicList";

const PokemonHome: React.FC = () => {
  const { loading, data } = useMagicList();

  console.log({ loading, data })

  return (
    <div>
      <Link to="/">Return</Link>
      <h2>Magic</h2>
      <LoadingHandler loading={loading} />
      {data?.map((item) => (
        <DataLink key={item?.id} data={item} />
      ))}
    </div>
  );
};

export default PokemonHome;
