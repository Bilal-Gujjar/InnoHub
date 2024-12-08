import { Code2, Brain, Cloud, Cpu } from 'lucide-react';

const solutions = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions built to address your unique business challenges and requirements.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to drive innovation and efficiency.',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless cloud solutions that scale with your business needs.',
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Connect and control your devices with cutting-edge IoT technology.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <solution.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}