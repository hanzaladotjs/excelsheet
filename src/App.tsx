import { useState } from "react";
import "./App.css";
import { FixedSizeGrid } from "react-window";

// Define the props type for the Cell component
type CellProps = {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
};

function App() {
  // Use Record to type cellData as an object with string keys and string values
  const [cellData, setCellData] = useState<Record<string, string>>({});
  const rows = 10;
  const cols = 10;1
  const cellWidth = 70;
  const cellHeight = 40;

  function handleInputValue(rowIndex: number, columnIndex: number, value: string) {
    setCellData((prev) => ({
      ...prev,
      [`${rowIndex}-${columnIndex}`]: value,
    }));
  }

  const Cell = ({ columnIndex, rowIndex, style }: CellProps) => (
    <div style={style} key={`cell-${rowIndex}-${columnIndex}`}>
      <input
        onChange={(e) => handleInputValue(rowIndex, columnIndex, e.target.value)}
        value={cellData[`${rowIndex}-${columnIndex}`] || ""}
        className="w-full border h-full"
      />
    </div>
  );

  return (
    <div>
      <div style={{}}>
        <FixedSizeGrid
          columnCount={cols}
          rowCount={rows}
          columnWidth={cellWidth}
          rowHeight={cellHeight}
          height={1200}
          width={3000}
        >
          {Cell}
        </FixedSizeGrid>
        <Print cellData={cellData} />
      </div>
    </div>
  );
}

export function Print({ cellData }: { cellData: Record<string, string> }) {
  return (
    <div>
      <ul>
        {Object.entries(cellData).map(([key, cell]) => (
          <li key={key}>{`Cell ${key}: ${cell}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;