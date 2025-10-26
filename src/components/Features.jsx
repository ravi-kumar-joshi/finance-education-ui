function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Interactive Tools</h3>
            <p className="text-gray-600">Practice with real-world financial calculators and simulators</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Personalized Learning</h3>
            <p className="text-gray-600">Customized paths based on your goals and knowledge level</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expert Content</h3>
            <p className="text-gray-600">Learn from certified financial educators</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
