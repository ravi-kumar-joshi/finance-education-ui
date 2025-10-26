function LearningPaths() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Beginner</h3>
            <p className="text-gray-700 mb-4">Perfect for those starting their financial journey</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Basic budgeting</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Saving strategies</span>
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full">Start Path</button>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Intermediate</h3>
            <p className="text-gray-700 mb-4">Build on your foundational knowledge</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Investment basics</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Credit management</span>
              </li>
            </ul>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md w-full">Start Path</button>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Advanced</h3>
            <p className="text-gray-700 mb-4">Master complex financial concepts</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Portfolio management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Tax optimization</span>
              </li>
            </ul>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md w-full">Start Path</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningPaths
