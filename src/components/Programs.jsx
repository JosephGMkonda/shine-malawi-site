import { Book, Bus, Utensils, Sprout, Trophy, Droplets, Home, TrendingUp } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Book,
      title: 'School Sponsorship',
      description: 'Providing educational opportunities for underprivileged children through full scholarship programs.',
      color: 'bg-blue-500'
    },
    {
      icon: Bus,
      title: 'School Travel Facilitation',
      description: 'Ensuring safe and reliable transportation for students to access quality education.',
      color: 'bg-green-500'
    },
    {
      icon: Utensils,
      title: 'School Feeding Programs',
      description: 'Nutritious meals to support learning and combat hunger in school environments.',
      color: 'bg-yellow-500'
    },
    {
      icon: Sprout,
      title: 'Agricultural Support',
      description: 'Sustainable farming initiatives to promote food security and economic independence.',
      color: 'bg-emerald-500'
    },
    {
      icon: Trophy,
      title: 'Sports Programs',
      description: 'Developing talent, promoting health, and building character through sports activities.',
      color: 'bg-purple-500'
    },
    {
      icon: Droplets,
      title: 'Water Well Drilling',
      description: 'Providing clean, accessible water sources to communities in need.',
      color: 'bg-cyan-500'
    },
    {
      icon: Home,
      title: 'Orphan Hosting',
      description: 'Safe housing and comprehensive care for orphaned and vulnerable children.',
      color: 'bg-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Business Plans',
      description: 'Entrepreneurship training and micro-business development for long-term sustainability.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-orange">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive initiatives designed to address the most pressing needs of Malawian communities through sustainable, impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-200"
            >
              <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <program.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;