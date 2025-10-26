function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">FinEdu</h1>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Tools</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
