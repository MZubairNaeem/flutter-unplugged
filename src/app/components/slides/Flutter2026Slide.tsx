import { Calendar, Globe, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useOutletContext } from 'react-router';

export default function Flutter2026Slide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Active Developers',
      trend: '+35%',
      color: '#02569B',
    },
    {
      icon: Globe,
      value: '1M+',
      label: 'Apps Published',
      trend: '+42%',
      color: '#0175C2',
    },
    {
      icon: TrendingUp,
      value: '#2',
      label: 'Cross-Platform Framework',
      trend: 'Stable',
      color: '#5BC0DE',
    },
  ];

  const timeline = [
    {
      year: '2024',
      event: 'Flutter 3.x',
      description: 'Enhanced performance & Impeller',
    },
    {
      year: '2025',
      event: 'Flutter 4.0',
      description: 'Web & Desktop maturity',
    },
    {
      year: '2026',
      event: 'Current',
      description: 'AI integration & Enterprise focus',
      highlight: true,
    },
  ];

  const companies = [
    'https://img.icons8.com/color/48/google-logo.png',
    'https://img.icons8.com/color/48/amazon-web-services.png',
    'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-bmw-is-a-german-multinational-company-which-produces-automobiles-and-motorcycles-automotive-shadow-tal-revivo.png',
    'https://img.icons8.com/color/48/ebay.png',
    'https://img.icons8.com/officexs/40/toyota.png',
    'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-lg-electronics-a-south-korean-multinational-electronics-company-industry-color-tal-revivo.png',
    'https://img.icons8.com/color/48/xiaomi.png',
    'https://img.icons8.com/fluency/48/supercell.png',
  ];

  return (
    <div className="h-full overflow-auto p-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-[#02569B]" />
            <h1 className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Flutter in 2026
            </h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            Why Flutter still matters and continues to grow
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full mx-auto" />
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white'
                } border ${isDark ? 'border-gray-700' : 'border-gray-200'
                } hover:border-[#02569B] transition-all hover:shadow-xl hover:scale-105 duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
                  style={{
                    boxShadow: `0 4px 20px ${stat.color}20`,
                  }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${stat.trend.includes('+')
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-blue-500/20 text-blue-500'
                    }`}
                >
                  {stat.trend}
                </span>
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

        {/* Timeline */}
        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'} mb-12`}>
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-[#02569B]" />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Flutter Evolution
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`p-6 rounded-xl ${item.highlight
                      ? isDark
                        ? 'bg-[#02569B]/20 border-2 border-[#02569B]'
                        : 'bg-blue-100 border-2 border-[#02569B]'
                      : isDark
                        ? 'bg-gray-900'
                        : 'bg-white'
                    } transition-all`}
                >
                  {item.highlight && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 bg-[#02569B] text-white text-xs font-bold rounded-full">
                        NOW
                      </span>
                    </div>
                  )}
                  <div
                    className={`text-2xl font-bold mb-2 ${item.highlight ? 'text-[#02569B]' : isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                  >
                    {item.year}
                  </div>
                  <div
                    className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {item.event}
                  </div>
                  <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-300'
                      }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Companies Using Flutter */}
        <div>
          <h2
            className={`text-3xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'
              }`}
          >
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`px-6 py-4 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white'
                  } border ${isDark ? 'border-gray-700' : 'border-gray-200'
                  } hover:border-[#02569B] transition-all hover:shadow-lg`}
              >
                <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <img
                    width="20"
                    height="20"
                    src={company}
                    alt={company}
                    className="object-contain"
                  />
                </span>
              </div>
            ))}
          </div>
          <p
            className={`text-center mt-6 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'
              } italic`}
          >
            And Many More...
          </p>
        </div>
      </div>
    </div>
  );
}
