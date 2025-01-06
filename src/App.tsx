import "./App.css";

function App() {
  const numParts = 30;
  const parts = Array.from({ length: numParts }, (_, i) => (
    <div key={i} className="part"></div>
  ));
  const parts2 = Array.from({ length: numParts }, (_, i) => (
    <div key={i} className="part2"></div>
  ));

  return (
    <div className="App">
      <div className="images-wrapper">
        <div className="image">{parts}</div>
        <div className="image">{parts2}</div>
      </div>
    </div>
  );
}

export default App;
