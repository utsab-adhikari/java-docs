import React from 'react';

const SpiralModelPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Spiral Model</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A realistic evolutionary software process model proposed by Boehm that combines the iterative nature of prototyping with the systematic control of the linear sequential model [1, 2].
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Core Concept Section */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">Core Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="leading-relaxed">
                The Spiral Model is an <strong>evolutionary process</strong> where software is developed in a series of <strong>incremental releases</strong> [3, 4]. Unlike traditional models that end at delivery, the spiral remains active throughout the life of the software until its retirement [5, 6].
              </p>
              <p className="leading-relaxed">
                It is particularly effective for <strong>large-scale projects</strong> because it incorporates a systematic approach in an iterative framework [5, 7].
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="font-bold text-blue-800 mb-2">Key Evolutionary Path:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm italic">
                <li><strong>Early Stages:</strong> Results in paper models or prototypes [3, 8].</li>
                <li><strong>Outward Movement:</strong> Each pass produces progressively more sophisticated versions of the software [9, 10].</li>
                <li><strong>Risk Focus:</strong> Uses prototyping as a primary <strong>risk reduction mechanism</strong> [5, 7].</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Six Framework Regions */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">The Six Task Regions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Customer Communication", desc: "Tasks required to establish effective communication between developer and customer [8, 11].", icon: "💬" },
              { title: "Planning", desc: "Defining resources, timelines, and other project-related information [8, 11].", icon: "📅" },
              { title: "Risk Analysis", desc: "Assessing both technical and management risks to ensure project stability [8, 11].", icon: "⚠️" },
              { title: "Engineering", desc: "Building one or more representations (models) of the application [12, 13].", icon: "🏗️" },
              { title: "Construction & Release", desc: "Coding, testing, installing, and providing user support/documentation [12, 13].", icon: "🚀" },
              { title: "Customer Evaluation", desc: "Obtaining feedback based on the engineering and implementation stages [12, 13].", icon: "👤" }
            ].map((region, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{region.icon}</div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">{region.title}</h3>
                <p className="text-gray-600 text-sm">{region.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages & Disadvantages */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-green-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Advantages</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>Superior <strong>Risk Handling</strong> and direct consideration of technical risks [7, 12].</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>High degree of <strong>flexibility</strong> in requirements and customer satisfaction [12].</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span>Improved quality through iterative development [7, 12].</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Challenges</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">✗</span>
                <span>Requires <strong>high expertise</strong> to assess considerable risks accurately [7, 14, 15].</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">✗</span>
                <span>Can be <strong>complex and expensive</strong> compared to linear models [7].</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">✗</span>
                <span>Difficult to convince customers that an evolutionary approach is controllable [7, 14].</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Outward Flow Insight */}
        <section className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Insight: The Outward Path</h2>
          <p className="text-blue-100 leading-relaxed">
            As you move <strong>outward</strong> along the process flow path, the project transitions from abstract concepts to physical reality. The first iteration might only result in a <strong>product specification</strong>, while the second produces a <strong>prototype</strong> [9, 10]. Each subsequent pass results in progressively more complete and <strong>sophisticated versions</strong> of the software until the final system is realized [9, 10].
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
        <p>Information sourced from "Software Project Management Concepts" and "Software Process Models" manuals.</p>
      </footer>
    </div>
  );
};