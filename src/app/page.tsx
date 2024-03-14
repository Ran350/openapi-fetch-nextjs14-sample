import { apiClient } from "@/lib/api/apiClient";

export default async function Bar() {
  const data1 = await apiClient.sampleApi();

  return (
    <div className="bg-blue-300 p-4 border-2 border-gray-400 rounded">
      Bar : {data1?.data}
    </div>
  );
}
