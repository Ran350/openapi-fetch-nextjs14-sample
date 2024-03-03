import { cache } from "react";

export const fetchData = async () => {
  // 別のNext.jsでPort=3001でAPIが起動している想定
  const res = await fetch("http://localhost:3000/sample-api", {
    cache: "no-cache",
  });
  const { data } = await res.json();
  return data;
};
