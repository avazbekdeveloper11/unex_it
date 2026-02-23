"use client";
// Bu yerda siz kelgan leadlarni ko'rasiz

const LeadRow = ({ lead }) => (
  <tr className="border-b border-slate-800 hover:bg-slate-900/50 transition">
    <td className="p-4">{lead.name}</td>
    <td className="p-4 text-blue-400">{lead.phone}</td>
    <td className="p-4">{lead.service}</td>
    <td className="p-4">
      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
        Yangi
      </span>
    </td>
  </tr>
);

const dummyLeads = [
  { id: 1, name: "Ali", phone: "+998 90 123 45 67", service: "Website" },
  { id: 2, name: "Vali", phone: "+998 99 765 43 21", service: "Mobile App" },
];

export default function AdminPage() {
  const leads = dummyLeads;

  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin panel</h1>
      <p className="text-gray-400 mb-8">
        Bu sahifada sizga kelgan leadlar ro&apos;yxatini ko&apos;rasiz.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0A0A0A]">
        <table className="w-full text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="p-4 font-medium text-gray-300">Ism</th>
              <th className="p-4 font-medium text-gray-300">Telefon</th>
              <th className="p-4 font-medium text-gray-300">Xizmat turi</th>
              <th className="p-4 font-medium text-gray-300">Holati</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <LeadRow key={lead.id} lead={lead} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}