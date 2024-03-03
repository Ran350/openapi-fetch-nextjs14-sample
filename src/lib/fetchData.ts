import client from "./api";

// 直接 fetch を使う場合
export const _fetchData = async () => {
  const res = await fetch("http://localhost:3000/sample-api", {
    // cache: "no-cache",
  });
  const data = await res.json();
  return { data };
};

// openapi-client を使う場合
export const fetchData = async () => {
  return await client.GET("/sample-api", {
    // cache: "no-cache",
  });
};
