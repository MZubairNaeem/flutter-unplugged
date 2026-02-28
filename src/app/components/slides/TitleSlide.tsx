import { Smartphone } from 'lucide-react';
import { useOutletContext } from 'react-router';

export default function TitleSlide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Flutter Logo Illustration */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Gradient Background Circle */}
            <div
              className="absolute inset-0 blur-3xl opacity-30"
              style={{
                background: 'radial-gradient(circle, #02569B 0%, #0175C2 50%, transparent 70%)',
              }}
            />
            <div className="relative flex items-center gap-6">
              <div
                className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-blue-50'
                  } backdrop-blur-sm`}
              >
                <Smartphone className="w-16 h-16 text-[#02569B]" strokeWidth={1.5} />
              </div>
              <div
                className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-blue-50'
                  } backdrop-blur-sm`}
              >
                {/* <Code className="w-16 h-16 text-[#02569B]" strokeWidth={1.5} /> */}
                <img className="w-16 h-16" src="https://img.icons8.com/color/480/flutter.png" alt="flutter" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center space-y-8">
          <div>
            <h1
              className={`text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                }`}
            >
              Flutter{' '}
              <span
                className="bg-gradient-to-r from-[#02569B] to-[#0175C2] bg-clip-text text-transparent"
              >
                Unplugged
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full mx-auto" />
          </div>

          <p
            className={`text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'
              } max-w-3xl mx-auto leading-relaxed`}
          >
            Breaking the hype. Exploring the reality of cross-platform development
          </p>

          {/* Date & Time */}
          <div
            className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'
              } backdrop-blur-sm`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#02569B] rounded-full animate-pulse" />
              <span className={`text-lg ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                28 Feb, 2026
              </span>
            </div>
            <div className={`w-px h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
            <span className={`text-lg ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              10:00 PM – 11:00 PM
            </span>
          </div>

          {/* Speaker Info */}
          <div className="mt-12 pt-8 border-t border-gray-700/30">
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Presented by
            </p>
            <p className={`text-lg mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Zubair Naeem
            </p>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Backend Engineering Lead @ RippleBerry Tech | CTO @ Woofy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
