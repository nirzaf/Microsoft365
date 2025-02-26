import Microsoft365AppsTable from './pages/Microsoft365AppsTable'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="app-container py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium">Microsoft 365</div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Overview</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Support</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium
                hover:bg-blue-500 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16">
        <Microsoft365AppsTable />
      </div>
    </div>
  )
}

export default App
