import { fetchData } from "@/lib/fetchData";

export default async function Bar() {
  const data = await fetchData();

  return (
    <div className="bg-blue-300 p-4 border-2 border-gray-400 rounded">
      Bar : {data}
    </div>
  );
}
