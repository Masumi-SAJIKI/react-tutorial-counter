import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = useCallback(() => setCount(count + 1), [count]);
  const handleSubtract = useCallback(() => setCount(count - 1), [count]);
  const handleClear = useCallback(() => setCount(0), []);

  return (
    <div style={{ textAlign: "center", marginTop: 16, marginBottom: 16 }}>
      <p>{count}</p>
      <button onClick={handleAdd} style={{ marginRight: 4 }}>
        ＋
      </button>
      <button
        onClick={handleSubtract}
        disabled={count <= 0}
        style={{ marginLeft: 4 }}
      >
        ー
      </button>
      <br />
      <button onClick={handleClear} disabled={count === 0}>
        Clear
      </button>
    </div>
  );
}

export default App;
