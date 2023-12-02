import { CategoryType } from "./types";

export async function fetchCategories(): Promise<CategoryType[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 664183e5f68b5adff64ecd42c39f059d7eb77e9196037c49c78a4528857cfff92f93c4d37ec55c8cedd6193bc6867decc2ad28bafc857d7a26ed8f8d366e89ebaf4080136a4b8c4239dc4980842685665a695f90fa5a473672ca3e5ba1d0283ee942096b2a8424dd7cc3ccae85ee31a17ce567f86676a80479d6b6c108b06fcf",
    },
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/categories",
      options
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return []; // return an empty array in case of an error
  }
}
