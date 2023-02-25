import type { DataResponse } from "~/types";

const DataCard: React.FC<{ data: DataResponse }> = ({ data }) => {
  return (
    <div>
      <h2>{data?.name}</h2>
      <img src={data?.image} alt={data?.name} />
      {!data?.image && "No image provided"}
    </div>
  );
};

export default DataCard;
