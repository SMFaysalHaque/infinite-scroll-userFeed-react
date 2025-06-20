import UserFeed from "./components/UserFeed";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center py-6">
        Infinite User Feed
      </h1>
      <UserFeed />
    </div>
  );
}

export default App;
