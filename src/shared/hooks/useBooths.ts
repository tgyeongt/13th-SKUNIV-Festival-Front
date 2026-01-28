import { useQuery } from "@tanstack/react-query";
import { publicAPI } from "../lib/api";

interface Booth {
  id: number;
  boothFaculty: string;
  boothThumbnailUrl: string;
  boothWaitings: number;
  boothLocation: string;
}

const fetchBooths = async (lang: string): Promise<Booth[]> => {
  let cursor: number | null = null;
  let allBooths: Booth[] = [];

  while (true) {
    const { data } = await publicAPI.get("boothInfo", {
      params: { lang, cursor },
    });

    const fetched: Booth[] = data.data;
    allBooths = [...allBooths, ...fetched];

    if (fetched.length < 8) break;
    cursor = fetched.at(-1)?.id ?? null;
  }

  return allBooths;
};

export const useBooths = (lang: string | null) => {
  return useQuery({
    queryKey: ["booths", lang],
    queryFn: () => fetchBooths(lang as string),
    enabled: !!lang,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
