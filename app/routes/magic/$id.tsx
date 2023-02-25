import { Link, useParams } from "@remix-run/react";
import DataCard from "~/components/DataCard";
import LoadingHandler from "~/components/LoadingHandler";
import useMagicData from "~/hooks/useMagicData";

const MagicCard: React.FC = () => {
  const params = useParams();
  const { data, loading } = useMagicData({ id: params.id || "" });
  return (
    <div>
      <Link to="/magic">Return</Link>
      <LoadingHandler loading={loading} />
      {!!data && <DataCard data={data} />}
    </div>
  );
};

export default MagicCard;
