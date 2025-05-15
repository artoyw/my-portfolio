'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const tabMap: { [key: string]: string } = {
  '/home': "Olivia's World",
  '/projects': 'Projects',
  //'/resume': 'Resume',
  '/about': 'About',
};

const tabs = ['Olivia\'s World', 'Projects', 'About'];

export default function WindowLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Olivia's World");

  useEffect(() => {
    const matchedTab = tabMap[pathname];
    setActiveTab(matchedTab ?? "Olivia's World");
  }, [pathname]);

  const handleTabClick = (tab: string) => {
    switch (tab) {
      case "Olivia's World":
        router.push('/home');
        break;
      case "Projects":
        router.push('/projects');
        break;
      case "About":
        router.push('/about');
        break;
      // case "Resume":
      //   router.push('/resume');
      //   break;
    }
  };


  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-100 font-mono">
      <div className="flex flex-wrap w-full overflow-x-auto sm:flex-nowrap items-start sm:items-center px-4 py-1 bg-gray-800 space-x-4 mb-0 sm:gap-4">
        <div className="max-w-full flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" 
            onClick={() => router.push('/')}></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* tabs */}
        <div className="max-w-full flex space-x-2">
          <div className="flex-1 flex overflow-x-auto space-x-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 max-w-full text-xs sm:text-base">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-1 rounded-t-xl whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-gray-900 text-green-400'
                    : 'bg-gray-600 text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="px-4 py-1 bg-gray-600 rounded-t-xl text-gray-400 cursor-default">+</div>
        </div>
        <div className="w-10" />
      </div>

      {/* address bar */}
      <div className="bg-gray-900 px-4 py-2 text-center w-full overflow-x-auto mt-0">
        <div className="flex flex-wrap items-center gap-4 max-w-full mx-auto">
          
          {/* nav buts*/}
          <button className="text-lg text-sm sm:text-base text-gray-200">
            ←
          </button>
          <button className="text-lg text-sm sm:text-base text-gray-200">
            →
          </button>
          <button className="pt-1 text-m text-sm sm:text-base text-gray-200">
            ↻
          </button>

        
        <div className=" flex-1 min-w-0 text-left bg-gray-700 px-4 py-1 rounded-full inline-block text-gray-300 w-full overflow-x-auto whitespace-nowrap text-xs sm:text-sm md:text-base">
          https://oliviawang.com/{activeTab.toLowerCase().replace(/ /g, '-')}
        </div>
        </div>
      </div>

      <main className="p-6 sm:p-6">{children}</main>
    </div>
  );
}
