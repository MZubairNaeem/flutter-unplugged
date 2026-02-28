import { Github, HelpCircle, Linkedin, Mail, MessageCircle, Twitter, Instagram } from 'lucide-react';
import { useOutletContext } from 'react-router';

export default function QASlide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        {/* Main Icon */}
        <div className="flex justify-center mt-24">
          <div className="relative">
            {/* Gradient Background */}
            <div
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle, #02569B 0%, #0175C2 50%, transparent 70%)',
              }}
            />
            <div className="relative">
              <div
                className={`p-8 rounded-full ${
                  isDark ? 'bg-gray-800/50' : 'bg-blue-50'
                } backdrop-blur-sm inline-block`}
              >
                <HelpCircle className="w-12 h-12 text-[#02569B]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <h1
            className={`text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Questions?
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#02569B] to-[#0175C2] rounded-full mx-auto mb-8" />
          <p
            className={`text-2xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-2xl mx-auto`}
          >
            Let's discuss Flutter, cross-platform development, or anything else!
          </p>
        </div>

        {/* Contact Info */}
        <div
          className={`p-8 rounded-2xl ${
            isDark ? 'bg-gray-800/50' : 'bg-gray-50'
          } border ${isDark ? 'border-gray-700' : 'border-gray-200'} mb-12`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-[#02569B]" />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                Zubair Naeem
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Backend Engineering Lead @ RippleBerry Tech
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                CTO @ Woofy
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <a
                href="mailto:zubair@dexic.tech"
                target='_blank'
                className={`p-4 rounded-xl ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } border ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                } hover:border-[#02569B] transition-all hover:scale-110`}
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-[#02569B]" />
              </a>
              <a
                href="https://www.instagram.com/zubair.n31/"
                target='_blank'
                className={`p-4 rounded-xl ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } border ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                } hover:border-[#02569B] transition-all hover:scale-110`}
                aria-label="Twitter"
              >
                <Instagram className="w-6 h-6 text-[#02569B]" />
              </a>
              <a
                href="https://www.linkedin.com/in/zubairn31/"
                target='_blank'
                className={`p-4 rounded-xl ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } border ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                } hover:border-[#02569B] transition-all hover:scale-110`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#02569B]" />
              </a>
              <a
                href="https://github.com/MZubairNaeem"
                target='_blank'
                className={`p-4 rounded-xl ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } border ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                } hover:border-[#02569B] transition-all hover:scale-110`}
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-[#02569B]" />
              </a>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="space-y-4">
          <h3
            className={`text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Thank You!
          </h3>
          <p
            className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Keep building amazing things with Flutter
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-2 h-2 bg-[#02569B] rounded-full animate-pulse" />
            <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Flutter Unplugged • 28 Feb, 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
