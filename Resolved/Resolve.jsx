const Resolve = ({ resolve }) => {
  return (
    <div>
      <h2 className="card-title">Resolved</h2>

      {resolve.length === 0 && (
        <p className="text-gray-400">No resolved tasks</p>
      )}

      {resolve.map((r) => (
        <div key={r.id} >
          {r.title}
        </div>
      ))}
    </div>
  );
};

export default Resolve;
