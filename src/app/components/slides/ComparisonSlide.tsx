import { useOutletContext } from 'react-router';
import { Check, X, Zap, Code, Package, Gauge } from 'lucide-react';

export default function ComparisonSlide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  const comparisons = [
    {
      category: 'Language',
      flutter: { text: 'Dart', hasAdvantage: true },
      reactNative: { text: 'JavaScript/TypeScript', hasAdvantage: false },
    },
    {
      category: 'Performance',
      flutter: { text: 'Native compiled (faster)', hasAdvantage: true },
      reactNative: { text: 'JavaScript bridge', hasAdvantage: false },
    },
    {
      category: 'UI Rendering',
      flutter: { text: 'Custom rendering engine', hasAdvantage: true },
      reactNative: { text: 'Native components', hasAdvantage: true },
    },
    {
      category: 'Learning Curve',
      flutter: { text: 'Steeper (new language)', hasAdvantage: false },
      reactNative: { text: 'Easier (familiar JS)', hasAdvantage: true },
    },
    {
      category: 'Hot Reload',
      flutter: { text: 'Excellent', hasAdvantage: true },
      reactNative: { text: 'Good', hasAdvantage: true },
    },
    {
      category: 'Community',
      flutter: { text: 'Growing rapidly', hasAdvantage: true },
      reactNative: { text: 'Larger, more mature', hasAdvantage: true },
    },
  ];

  const flutterPros = [
    'Single codebase for all platforms',
    'Superior performance',
    'Rich widget library',
    'Google backing',
  ];

  const reactNativePros = [
    'JavaScript ecosystem',
    'Larger developer pool',
    'More third-party packages',
    'Meta backing',
  ];

  return (
    <div className="h-full overflow-auto p-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Flutter vs React Native
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            The real differences that matter
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full mx-auto mt-4" />
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <div className="grid grid-cols-3 gap-4">
            {/* Header Row */}
            <div className="text-center py-4">
              <span
                className={`text-sm uppercase tracking-wider ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                Category
              </span>
            </div>
            <div
              className={`text-center py-4 rounded-t-2xl ${
                isDark ? 'bg-[#02569B]/20' : 'bg-blue-50'
              } border-b-4 border-[#02569B]`}
            >
              <div className="flex items-center justify-center gap-2">
                <Package className="w-5 h-5 text-[#02569B]" />
                <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Flutter
                </span>
              </div>
            </div>
            <div
              className={`text-center py-4 rounded-t-2xl ${
                isDark ? 'bg-purple-900/20' : 'bg-purple-50'
              } border-b-4 border-purple-600`}
            >
              <div className="flex items-center justify-center gap-2">
                <Code className="w-5 h-5 text-purple-600" />
                <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  React Native
                </span>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <>
                <div
                  key={`category-${index}`}
                  className={`flex items-center justify-center p-4 rounded-xl ${
                    isDark ? 'bg-gray-800/50' : 'bg-gray-50'
                  }`}
                >
                  <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.category}
                  </span>
                </div>
                <div
                  key={`flutter-${index}`}
                  className={`p-4 rounded-xl ${
                    isDark ? 'bg-gray-800/30' : 'bg-white'
                  } border ${isDark ? 'border-gray-700' : 'border-gray-200'} ${
                    item.flutter.hasAdvantage ? 'border-[#02569B] bg-[#02569B]/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {item.flutter.hasAdvantage && (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.flutter.text}
                    </span>
                  </div>
                </div>
                <div
                  key={`react-${index}`}
                  className={`p-4 rounded-xl ${
                    isDark ? 'bg-gray-800/30' : 'bg-white'
                  } border ${isDark ? 'border-gray-700' : 'border-gray-200'} ${
                    item.reactNative.hasAdvantage ? 'border-purple-600 bg-purple-500/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {item.reactNative.hasAdvantage && (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.reactNative.text}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Pros Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Flutter Pros */}
          <div
            className={`p-6 rounded-2xl ${
              isDark ? 'bg-gray-800/50' : 'bg-blue-50'
            } border ${isDark ? 'border-gray-700' : 'border-blue-200'}`}
          >
            <h3
              className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Zap className="w-6 h-6 text-[#02569B]" />
              Flutter Strengths
            </h3>
            <ul className="space-y-3">
              {flutterPros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* React Native Pros */}
          <div
            className={`p-6 rounded-2xl ${
              isDark ? 'bg-gray-800/50' : 'bg-purple-50'
            } border ${isDark ? 'border-gray-700' : 'border-purple-200'}`}
          >
            <h3
              className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Gauge className="w-6 h-6 text-purple-600" />
              React Native Strengths
            </h3>
            <ul className="space-y-3">
              {reactNativePros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
