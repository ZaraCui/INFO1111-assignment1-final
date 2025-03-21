const committeeMembers = [
  { role: 'Chairperson', name: 'David Cui', email: 'David@strata.com' },
  { role: 'Secretary', name: 'Rebecca Xiong', email: 'Rebecca@strata.com' },
  { role: 'Treasurer', name: 'Zara Cui', email: 'zara@strata.com' },
  { role: 'Member', name: 'Jasmine Liu', email: 'Jasmine@strata.com' },
];

export default function Committee() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Strata Committee Members</h1>
      <ul className="space-y-2">
        {committeeMembers.map((member, i) => (
          <li key={i} className="border p-3 rounded-lg shadow">
            <strong>{member.role}</strong>: {member.name} (
              <a href={`mailto:${member.email}`} className="text-blue-600 underline">{member.email}</a>)
          </li>
        ))}
      </ul>
    </div>
  );
}