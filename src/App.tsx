import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = useCallback(() => setCount(count + 1), [count]);
  const handleSubtract = useCallback(() => setCount(count - 1), [count]);
  const handleClear = useCallback(() => setCount(0), []);

  return (
    <div style={{ textAlign: "center", marginTop: 16, marginBottom: 16 }}>
      <h2>{count}</h2>
      <button
        onClick={handleSubtract}
        disabled={count <= 0}
        style={{ marginRight: 4 }}
      >
        ー
      </button>
      <button onClick={handleAdd} style={{ marginLeft: 4 }}>
        ＋
      </button>
      <br />
      <button onClick={handleClear} disabled={count === 0}>
        Clear
      </button>
    </div>
  );
}

export default App;
