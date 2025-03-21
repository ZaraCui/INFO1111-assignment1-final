import Navbar from "../components/Navbar";

const residents = [
  "Zara Cui", "Jasmine Liu", "Rebecca Xiong", "David Cui", "Kangyi Wang",
  "Fangye Huang", "Hana Wang", "Hanqi Wang", "Zhiyi Zhang", "Xinyan Hu",
  "Yue Han", "Yueduo Bao", "Alex Lee", "Sophie Chen", "Eric Wu", "Linda Gao",
  "Michael Zhang", "Rachel Lin", "Jason Tan", "Emily Zhou"
];

export default function Residents() {
  return (
    <>
      <Navbar />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Residents</h1>
        <div className="bg-white p-6 rounded-2xl shadow">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 border-b">#</th>
                <th className="p-2 border-b">Resident Name</th>
                <th className="p-2 border-b">Unit Number</th>
                <th className="p-2 border-b">Outstanding Levies</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((name, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border-b">{index + 1}</td>
                  <td className="p-2 border-b">{name}</td>
                  <td className="p-2 border-b">Unit {index + 101}</td>
                  <td className="p-2 border-b">{index % 4 === 0 ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
