

import "./App.css";
import { FixedSizeGrid } from "react-window";

function App() {
  const rows = 1500;
  const cols = 1500;
  const cellWidth = 70;
  const cellHeight = 40;

  const Cell = ({ columnIndex, rowIndex, style }:any) => (
    <div style={style} key={`cell-${rowIndex}-${columnIndex}`}>
      <input
        className="w-full border h-full"
      />
    </div>
  );

  return (
    <div style={{ margin: "2.5rem", display: "flex", flexDirection: "column" }}>
      <FixedSizeGrid
        columnCount={cols}
        rowCount={rows}
        columnWidth={cellWidth}
        rowHeight={cellHeight}
        height={1200}
        width={2000}
      >
        {Cell}
      </FixedSizeGrid>
    </div>
  );
}

export default App;
