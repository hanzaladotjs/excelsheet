
import { useState } from "react";
import "./App.css";
import { FixedSizeGrid } from "react-window";

function App() {

  const [cellData, setCellData] = useState<Array<string>>([])
  const rows = 10;
  const cols = 10;
  const cellWidth = 70;
  const cellHeight = 40;

  function handleInputValue (value: any) {
    setCellData((prev) => [...prev, value])
  }


  const Cell = ({ columnIndex, rowIndex, style }: any) => (
    <div style={style} key={`cell-${rowIndex}-${columnIndex}`}>
      <input onChange={(e) => handleInputValue(e.target.value) } className="w-full border h-full" />
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
        width={2000}
      >
        {Cell}
      </FixedSizeGrid>
      <Print cellData={cellData}></Print>
      </div>

    </div>
  );
}

export function Print ({cellData}:any) {
  return (
    <div>
      <ul>
      {cellData.map((index : any, cell: any) => (
        
          <li key={index}> {cell} </li>
        
      ))}
      </ul>
    </div>
  )
}

export default App;
