import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = "pub_470006fa89d521ed526ca342341d1723b0c4c";
export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({ baseUrl: `https://newsdata.io/api/1/` }),

  endpoints: (builder) => ({
    //get All News

    getAllNews: builder.query({
      query: () => `top-headlines?category=general&lang=en&apikey=${apiKey}`,
    }),

    getNewsByCategory: builder.query({
        query: (category) => `latest?apikey=${apiKey}&language=en&category=${category}`,
      }),

    getNewsByQuery: builder.query({
      query: (query) => `latest?apikey=${apiKey}&q=${query}&language=en`,
    })  
  }),
});


export const {useGetAllNewsQuery,useGetNewsByCategoryQuery,useGetNewsByQueryQuery} = newsApi;