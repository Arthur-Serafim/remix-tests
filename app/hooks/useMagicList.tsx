import { useEffect, useState } from "react";
import type { ListDataResponse } from "~/types";

const useMagicList = () => {
  const [magicList, setMagicList] = useState<Array<ListDataResponse>>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetch("https://api.magicthegathering.io/v1/cards");
      const parsedData = await data?.json();
      setMagicList(
        parsedData.cards?.map((item: any) => ({
          name: item?.name,
          id: item?.id,
          type: "magic",
        }))
      );
      setLoading(false);
    })();
  }, []);

  return { data: magicList, loading: loading };
};

export default useMagicList;
