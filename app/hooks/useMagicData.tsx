import { useEffect, useState } from "react";
import type { DataResponse, UseDataInput } from "~/types";

interface MagicDataApiResponse {
  card: {
    name: string;
    imageUrl: string;
  };
}

const useMagicData = ({ id }: UseDataInput) => {
  const [magicData, setMagicData] = useState<DataResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetch(
        `https://api.magicthegathering.io/v1/cards/${id}`
      );
      const parsedData: MagicDataApiResponse = await data?.json();

      setMagicData({
        image: parsedData?.card?.imageUrl,
        name: parsedData?.card?.name,
      });
      setLoading(false);
    })();
  }, []);

  return { data: magicData, loading: loading };
};

export default useMagicData;
