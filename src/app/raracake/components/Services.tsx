interface Props {
  info: {
    serviceOptions: string[];
    planning: string[];
    payments: string[];
    parking: string[];
  };
}
export default function Services({ info }: Props) {
  return (
    <div className="p-6 bg-gray-50">
      <h3 className="text-xl font-semibold">🔧 Services</h3>
      <div className="grid grid-cols-2 gap-4 text-sm mt-3">
        <div>
          <h4 className="font-semibold">Service Options</h4>
          <ul>
            {info.serviceOptions.map((x, i) => (
              <li key={i}>✅ {x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Payments</h4>
          <ul>
            {info.payments.map((x, i) => (
              <li key={i}>💳 {x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Planning</h4>
          <ul>
            {info.planning.map((x, i) => (
              <li key={i}>📌 {x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Parking</h4>
          <ul>
            {info.parking.map((x, i) => (
              <li key={i}>🅿️ {x}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
