function Tools() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Financial Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Budget Calculator</h3>
            <p className="text-gray-600 mb-4">Plan your monthly expenses</p>
            <button className="text-blue-600 hover:text-blue-700">Try Now →</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Investment Simulator</h3>
            <p className="text-gray-600 mb-4">Test investment strategies</p>
            <button className="text-blue-600 hover:text-blue-700">Try Now →</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Loan Calculator</h3>
            <p className="text-gray-600 mb-4">Calculate loan payments</p>
            <button className="text-blue-600 hover:text-blue-700">Try Now →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
