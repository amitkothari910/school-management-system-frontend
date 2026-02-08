function DashboardCard({ title, count }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-3xl font-bold mt-2">{count}</p>
    </div>
  );
}

export default DashboardCard;
