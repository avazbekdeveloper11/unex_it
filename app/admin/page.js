// Bu yerda siz kelgan leadlarni ko'rasiz
const LeadRow = ({ lead }) => (
  <tr className="border-b border-slate-800 hover:bg-slate-900/50 transition">
    <td className="p-4">{lead.name}</td>
    <td className="p-4 text-blue-400">{lead.phone}</td>
    <td className="p-4">{lead.service}</td>
    <td className="p-4">
      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">Yangi</span>
    </td>
  </tr>
);