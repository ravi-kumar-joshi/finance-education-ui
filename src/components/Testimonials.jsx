function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">Beginner Path</p>
              </div>
            </div>
            <p className="text-gray-700">"This platform transformed my understanding of personal finance. I now feel confident managing my money!"</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-gray-600">Intermediate Path</p>
              </div>
            </div>
            <p className="text-gray-700">"The investment tools helped me start my portfolio with confidence. Highly recommend!"</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Emily Davis</h4>
                <p className="text-sm text-gray-600">Advanced Path</p>
              </div>
            </div>
            <p className="text-gray-700">"Advanced concepts made easy. This is the best financial education platform I've used."</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
