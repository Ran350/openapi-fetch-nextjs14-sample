import { fetchData } from "@/lib/fetchData";
// globals.css
import "./globals.css";

export default async function BarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchData();

  return (
    <html>
      <body>
        <div className="bg-gray-200 p-4 border-2 border-gray-400 rounded">
          Bar Layout : {data.data?.data}
          {children}
        </div>
      </body>
    </html>
  );
}
