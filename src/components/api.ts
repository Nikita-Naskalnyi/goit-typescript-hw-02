import axios from "axios";
import { Photo } from "../types";

const ACCESS_KEY = "bQ3qc7lNVYQ4774jalS1GqB9FD_pjFKf4_mR1SN-_9U";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ACCESS_KEY,
    orientation: "landscape",
    per_page: "12",
  },
});

export const getPhotos = async (
  query: string,
  page: number
): Promise<{ results: Photo[]; totalPages: number }> => {
  const { data } = await instance.get("search/photos", {
    params: { query, page },
  });
  return {
    results: data.results,
    totalPages: data.total_pages,
  };
};
