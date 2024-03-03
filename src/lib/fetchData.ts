import client from "./api";

export const _fetchData = async () => {
  const res = await fetch("http://localhost:3000/sample-api", {
    // cache: "no-cache",
  });
  const data = await res.json();
  return { data };
};

export const fetchData = async () => {
  return await client.GET("/sample-api", {
    // cache: "no-cache",
  });
};
