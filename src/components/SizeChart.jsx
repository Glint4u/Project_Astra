export default function SizeChart() {
    const sizes = ["SIZE", "S", "M", "L", "XL"]
    const measurements = [
      {
        label: "CHEST",
        values: ["43", "45", "47", "49"],
      },
      {
        label: "LENGTH",
        values: ["28.5", "29", "29.5", "30"],
      },
    ]
  
    return (
      <div className="max-w-[500px] w-[95%] md:w-full overflow-scroll mx-auto p-4 bg-black">
        <div className="border border-gray-800 rounded-lg overflow-scroll">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900">
                {sizes.map((size, index) => (
                  <th key={index} className="px-4 py-3 text-left font-medium text-gray-100 border-b border-gray-800">
                    {size}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {measurements.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                  <td className="px-4 py-3 font-medium text-gray-100">{row.label}</td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex} className="px-4 py-3 text-gray-400">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  