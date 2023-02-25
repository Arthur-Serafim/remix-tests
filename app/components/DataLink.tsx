import { Link } from "@remix-run/react";
import type { ListDataResponse } from "~/types";

const DataLink: React.FC<{ data: ListDataResponse }> = ({ data }) => {
  return (
    <div key={data?.id}>
      <Link to={`/${data?.type}/${data?.id}`}>{data?.name}</Link>
    </div>
  );
};

export default DataLink;
