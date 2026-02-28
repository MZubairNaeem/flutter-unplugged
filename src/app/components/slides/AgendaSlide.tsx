import { useOutletContext } from 'react-router';
import {
  GitCompare,
  Smartphone,
  TrendingUp,
  Briefcase,
  Rocket,
  Target,
} from 'lucide-react';

export default function AgendaSlide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  const agendaItems = [
    {
      icon: GitCompare,
      title: 'Flutter vs React Native',
      description: 'The real differences',
      color: '#02569B',
    },
    {
      icon: Smartphone,
      title: 'Flutter as a cross-platform powerhouse',
      description: 'Build once, deploy everywhere',
      color: '#0175C2',
    },
    {
      icon: TrendingUp,
      title: 'Why Flutter still matters in 2026',
      description: 'Current state and future outlook',
      color: '#5BC0DE',
    },
    {
      icon: Briefcase,
      title: 'Market demand & career potential',
      description: 'Job opportunities and growth',
      color: '#02569B',
    },
    {
      icon: Rocket,
      title: 'Flutter from a startup perspective',
      description: 'Product development insights',
      color: '#0175C2',
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-12 h-12 text-[#02569B]" />
            <h1 className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What You'll Learn
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full mx-auto" />
        </div>

        {/* Agenda Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${
                isDark ? 'bg-gray-800/50' : 'bg-gray-50'
              } border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              } hover:border-[#02569B] transition-all group hover:shadow-xl hover:scale-[1.02] duration-300`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`p-4 rounded-xl ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                  } group-hover:scale-110 transition-transform shadow-lg`}
                  style={{
                    boxShadow: `0 4px 20px ${item.color}20`,
                  }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className={`text-xl font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        isDark ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Duration Note */}
        <div className="mt-12 text-center">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl ${
              isDark ? 'bg-gray-800/50' : 'bg-blue-50'
            } border ${isDark ? 'border-gray-700' : 'border-blue-200'}`}
          >
            <div className="w-2 h-2 bg-[#02569B] rounded-full animate-pulse" />
            <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              60-minute deep dive into Flutter development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
