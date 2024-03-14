import { apiClient } from "@/lib/api/apiClient";

export default async function BarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data1 = await apiClient.sampleApi();

  return (
    <html>
      <body>
        <div className="bg-gray-200 p-4 border-2 border-gray-400 rounded">
          Bar Layout : {data1.data}
          {children}
        </div>
      </body>
    </html>
  );
}
