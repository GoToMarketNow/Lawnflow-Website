interface ComparisonRow {
  driver: string;
  yardbook: string;
  jobber: string;
  housecallPro: string;
  serviceAutopilot: string;
  aspire: string;
  lawnflow: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

const platforms = [
  "Yardbook",
  "Jobber",
  "Housecall Pro",
  "Service Autopilot",
  "Aspire",
  "LawnFlow.ai",
];

const getIconStyle = (value: string) => {
  if (value === "🟣") return "font-bold text-lg";
  return "text-lg";
};

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="w-full overflow-x-auto -mx-4 sm:mx-0">
      <div className="min-w-[800px] px-4 sm:px-0">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b-2 border-[var(--border-color)]">
              <th
                className="text-left py-3 px-3 w-1/4"
                style={{
                  fontSize: "var(--text-small)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Value Driver
              </th>
              {platforms.map((platform, idx) => (
                <th
                  key={idx}
                  className={`text-center py-3 px-2 ${
                    platform === "LawnFlow.ai" ? "bg-purple-50" : ""
                  }`}
                  style={{
                    fontSize: "var(--text-small)",
                    fontWeight: "var(--font-weight-medium)",
                    color:
                      platform === "LawnFlow.ai"
                        ? "var(--accent-purple)"
                        : "var(--text-primary)",
                  }}
                >
                  {platform}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-[var(--border-color)] hover:bg-gray-50 transition-colors"
              >
                <td
                  className="py-3 px-3 text-left"
                  style={{
                    fontSize: "var(--text-small)",
                    color: "var(--text-primary)",
                  }}
                >
                  {row.driver}
                </td>
                <td className="py-3 px-2 text-center">
                  <span className={getIconStyle(row.yardbook)}>{row.yardbook}</span>
                </td>
                <td className="py-3 px-2 text-center">
                  <span className={getIconStyle(row.jobber)}>{row.jobber}</span>
                </td>
                <td className="py-3 px-2 text-center">
                  <span className={getIconStyle(row.housecallPro)}>
                    {row.housecallPro}
                  </span>
                </td>
                <td className="py-3 px-2 text-center">
                  <span className={getIconStyle(row.serviceAutopilot)}>
                    {row.serviceAutopilot}
                  </span>
                </td>
                <td className="py-3 px-2 text-center">
                  <span className={getIconStyle(row.aspire)}>{row.aspire}</span>
                </td>
                <td className="py-3 px-2 text-center bg-purple-50">
                  <span className={getIconStyle(row.lawnflow)}>{row.lawnflow}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
