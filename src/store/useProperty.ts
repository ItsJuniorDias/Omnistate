import { create } from "zustand";

type PropertyProps = {
  id: string;
  name: string;
  images: String[];
  price: number;
  profit: number;
  returns: number;
  investors: number;
}[];

type DataStore = {
  data: PropertyProps;
  fetch: (item: PropertyProps) => void;
};

export const usePropertyStore = create<DataStore>((set, get) => ({
  data: [
    {
      id: "",
      name: "",
      images: [],
      investors: 0,
      price: 0,
      profit: 0,
      returns: 0,
    },
  ],
  fetch: (item: PropertyProps) => set(() => ({ data: item })),
}));
