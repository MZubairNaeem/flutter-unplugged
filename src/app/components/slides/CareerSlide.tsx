import { useOutletContext } from 'react-router';
import { TrendingUp, Briefcase, GraduationCap, DollarSign, Globe, Star } from 'lucide-react';

export default function CareerSlide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  const jobStats = [
    {
      icon: Briefcase,
      value: '50K+',
      label: 'Flutter Jobs Globally',
      color: '#02569B',
    },
    {
      icon: DollarSign,
      value: '$85K-$140K',
      label: 'Average Salary Range (Global)',
      color: '#0175C2',
    },
    {
      icon: TrendingUp,
      value: '+45%',
      label: 'YoY Job Growth',
      color: '#5BC0DE',
    },
  ];

  const skills = [
    { name: 'Dart Language', demand: 95 },
    { name: 'Flutter Framework', demand: 100 },
    { name: 'State Management', demand: 85 },
    { name: 'REST APIs', demand: 90 },
    { name: 'Firebase', demand: 80 },
    { name: 'Native Integration', demand: 75 },
  ];

  const companies = [
    'Google',
    'Alibaba',
    'Tencent',
    'BMW',
    'Square',
    'eBay',
    'ByteDance',
    'Nubank',
    'Grab',
    'Dream11',
    'Reflectly',
    'Hamilton',
  ];

  const roleTypes = [
    { title: 'Flutter Developer', description: 'Mobile app development specialist' },
    { title: 'Full-Stack Flutter', description: 'Frontend + Backend integration' },
    { title: 'Flutter Architect', description: 'Design scalable Flutter applications' },
    { title: 'Mobile Team Lead', description: 'Lead Flutter development teams' },
  ];

  return (
    <div className="h-full overflow-auto p-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12 text-[#02569B]" />
            <h1 className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Career Potential
            </h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            Flutter developer opportunities in 2026
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full mx-auto" />
        </div>

        {/* Job Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {jobStats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white'
              } border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              } hover:border-[#02569B] transition-all hover:shadow-xl hover:scale-105 duration-300`}
            >
              <div
                className={`p-4 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'} inline-block mb-4`}
                style={{
                  boxShadow: `0 4px 20px ${stat.color}20`,
                }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>
              <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills in Demand */}
        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'} mb-12`}>
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-[#02569B]" />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Skills in Demand
            </h2>
          </div>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {skill.name}
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {skill.demand}%
                  </span>
                </div>
                <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`}>
                  <div
                    className="h-full bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.demand}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Role Types */}
          <div>
            <h2
              className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Common Roles
            </h2>
            <div className="space-y-4">
              {roleTypes.map((role, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl ${
                    isDark ? 'bg-gray-800/50' : 'bg-white'
                  } border ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  } hover:border-[#02569B] transition-all`}
                >
                  <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {role.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Companies Hiring */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#02569B]" />
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Who's Hiring
              </h2>
            </div>
            <div
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800/50' : 'bg-white'
              } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <div className="grid grid-cols-2 gap-4">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      isDark ? 'bg-gray-900' : 'bg-gray-50'
                    } text-center hover:bg-[#02569B]/10 transition-all border ${
                      isDark ? 'border-gray-800' : 'border-gray-100'
                    } hover:border-[#02569B]`}
                  >
                    <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {company}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className={`text-center mt-6 text-sm ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                } italic`}
              >
                Global companies across industries are actively seeking Flutter talent, from tech giants to innovative startups.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div
            className={`inline-block p-8 rounded-2xl ${
              isDark ? 'bg-gradient-to-r from-[#02569B]/20 to-[#0175C2]/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'
            } border ${isDark ? 'border-[#02569B]' : 'border-blue-200'}`}
          >
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              The Time is Now
            </h3>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Flutter developers are in high demand with competitive salaries and exciting opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
