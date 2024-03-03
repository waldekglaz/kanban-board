import { Header, Sidebar } from "./components";

function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "300px" }}>
        <Header />
        <main>Content</main>
      </div>
    </div>
  );
}

export default App;
