import { Briefcase, Code2, User } from 'lucide-react';
import { useOutletContext } from 'react-router';

export default function SpeakerSlide() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  const roles = [
    {
      image: 'public/rb.png',
      title: 'Backend Engineering Lead',
      company: 'RippleBerry Tech',
      icon: Briefcase,
    },
    {
      image: 'public/woofy.svg',
      title: 'CTO',
      company: 'Woofy',
      icon: Code2,
    },
  ];
  const technologies = [

    {
      name: 'Flutter',
      image: 'https://img.icons8.com/color/48/flutter.png',
    },
    {
      name: 'Vue',
      image: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-color-tal-revivo.png',
    },
    {
      name: 'Nuxt',
      image: 'https://img.icons8.com/color/48/nuxt-jc.png',
    },
    {
      name: 'Laravel',
      image: 'https://img.icons8.com/fluency/48/laravel.png',
    },
    {
      name: 'Nest',
      image: 'https://img.icons8.com/color/48/nestjs.png',
    },
    {
      name: 'Express',
      image: 'https://img.icons8.com/color/48/express-js.png',
    },
  ];

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Speaker Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Gradient Background */}
              <div
                className="absolute inset-0 blur-3xl opacity-40"
                style={{
                  background:
                    'radial-gradient(circle, #02569B 0%, #0175C2 50%, transparent 70%)',
                }}
              />
              <div className="relative">
                <div
                  className={`w-80 h-80 rounded-3xl overflow-hidden border-4 ${isDark ? 'border-gray-800' : 'border-gray-200'
                    } shadow-2xl`}
                >

                  <img
                    src="https://woofy-prod.s3.ap-southeast-1.amazonaws.com/website/zubair.jpeg"
                    alt="Zubair Naeem"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Placeholder overlay - user can replace image */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-xs ${isDark ? 'bg-gray-900/80' : 'bg-white/80'
                    } backdrop-blur-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  Hi, I'm Zubair!
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Speaker Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Zubair Naeem
                </h1>
              </div>
              <p
                className={`text-2xl italic ${isDark ? 'text-gray-400' : 'text-gray-500'
                  } mb-8`}
              >
                A Human
              </p>
            </div>

            {/* Roles */}
            <div className="space-y-4">
              <h3
                className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'
                  } mb-4`}
              >
                Current Roles
              </h3>
              {roles.map((role, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'
                    } border ${isDark ? 'border-gray-700' : 'border-gray-200'
                    } hover:border-[#02569B] transition-all group`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'
                        } group-hover:bg-[#02569B]/10 transition-colors`}
                    >
                      <img
                        src={role.image}
                        alt="Zubair Naeem"
                        className="w-8 h-8 object-cover"
                      />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {role.title}
                      </h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {role.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h3
                className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'
                  } mb-4`}
              >
                Technologies Explored
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium ${isDark
                      ? 'bg-gray-800 text-gray-300 border border-gray-700'
                      : 'bg-white text-gray-700 border border-gray-300'
                      } hover:border-[#02569B] hover:text-[#02569B] transition-all`}
                  >
                    <img
                      width="20"
                      height="20"
                      src={tech.image}
                      alt={tech.name}
                      className="object-contain"
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
