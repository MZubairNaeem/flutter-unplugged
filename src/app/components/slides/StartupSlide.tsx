import {
  CheckCircle,
  Clock,
  DollarSign,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { useOutletContext } from 'react-router';

export default function StartupSlide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Time-to-Market',
      description: 'Launch MVP in weeks, not months',
      color: '#02569B',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Single codebase = Lower development cost',
      color: '#0175C2',
    },
    {
      icon: Users,
      title: 'Smaller Team Required',
      description: 'One team for all platforms',
      color: '#5BC0DE',
    },
    {
      icon: Zap,
      title: 'Rapid Iteration',
      description: 'Hot reload enables quick experiments',
      color: '#02569B',
    },
  ];

  const features = [
    'Beautiful, native-like UI',
    'Cross-platform consistency',
    'Easy integration with backends',
    'Rich animation support',
    'Strong community packages',
    'Excellent documentation',
  ];

  return (
    <div className="h-full overflow-auto p-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-12 h-12 text-[#02569B]" />
            <h1 className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Flutter for Startups
            </h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            The perfect framework for product development
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Benefits */}
          <div className="space-y-6">
            <h2
              className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Sparkles className="w-8 h-8 text-[#02569B]" />
              Why Startups Choose Flutter
            </h2>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl ${
                  isDark ? 'bg-gray-800/50' : 'bg-white'
                } border ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                } hover:border-[#02569B] transition-all hover:shadow-lg group`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      isDark ? 'bg-gray-900' : 'bg-gray-50'
                    } group-hover:scale-110 transition-transform`}
                    style={{
                      boxShadow: `0 4px 20px ${benefit.color}20`,
                    }}
                  >
                    <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {benefit.title}
                    </h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - App Mockup */}
          <div className="flex flex-col">
            <h2
              className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Real-World Example
            </h2>
            <div
              className={`flex-1 rounded-2xl ${
                isDark ? 'bg-gray-800/50' : 'bg-gradient-to-br from-blue-50 to-purple-50'
              } border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              } overflow-hidden relative group`}
            >
              {/* Mockup Image */}
              <div className="h-full flex items-center justify-center p-8">
                <div className="relative">
                  {/* Phone Frame */}
                  <div
                    className={`w-72 h-[580px] rounded-[3rem] border-8 ${
                      isDark ? 'border-gray-900 bg-gray-900' : 'border-gray-800 bg-white'
                    } overflow-hidden shadow-2xl`}
                  >
                    <img
                      src="public/screenshot.jpeg"
                      alt="Mobile App Mockup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 ${
                      isDark ? 'bg-gray-900' : 'bg-gray-800'
                    } rounded-b-2xl`}
                  />
                </div>
              </div>

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at center, transparent 40%, rgba(2, 86, 155, 0.1) 100%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div
          className={`p-8 rounded-2xl ${
            isDark ? 'bg-gradient-to-r from-gray-800/50 to-gray-800/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Flutter Features for Product Development
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
