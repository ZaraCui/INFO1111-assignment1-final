import Navbar from "../components/Navbar";

export default function Announcements() {
  const announcements = [
    { title: "Elevator Maintenance", date: "20 Mar", details: "Elevators will be serviced between 10AM - 2PM." },
    { title: "Fire Drill", date: "25 Mar", details: "All residents must participate in the scheduled fire drill." }
  ];

  return (
    <>
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Announcements</h1>
        <div className="space-y-4">
          {announcements.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-gray-700 mt-1">{item.details}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
