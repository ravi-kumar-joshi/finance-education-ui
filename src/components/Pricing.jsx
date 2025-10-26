function Pricing() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <p className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Basic courses</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Limited tools access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Community support</span>
              </li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300">Get Started</button>
          </div>
          <div className="border-2 border-blue-600 rounded-lg p-8 relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg text-sm">Popular</div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-6">$29<span className="text-lg font-normal text-gray-600">/month</span></p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>All courses</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Full tools access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Certificates</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700">Get Started</button>
          </div>
          <div className="border-2 border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Custom content</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Dedicated support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Analytics dashboard</span>
              </li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-300">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
