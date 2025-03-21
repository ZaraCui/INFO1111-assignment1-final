const meetings = [
  { date: '2025-03-01', topic: 'Annual General Meeting', doc: '/meeting-agm.pdf' },
  { date: '2025-02-20', topic: 'Budget Planning', doc: '/budget-meeting.pdf' },
];

export default function Meetings() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Meeting Records</h1>
      <ul className="space-y-2">
        {meetings.map((m, i) => (
          <li key={i} className="border p-3 rounded-lg shadow">
            <p><strong>Date:</strong> {m.date}</p>
            <p><strong>Topic:</strong> {m.topic}</p>
            <p><a href={m.doc} download className="text-blue-600 underline">Download Document</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}