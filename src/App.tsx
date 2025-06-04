import "./App.css";

function App() {
  const rows = 100;
  const cols = 100;

  return (
    <div className="m-10 flex flex-col">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex">
          {Array.from({ length: cols }).map((_, colsIndex) => (
            <input
              className="p-2 border"
              key={`col-${colsIndex}-${rowIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
export default App;
