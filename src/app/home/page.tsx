'use client';
import WindowLayout from '../../components/WindowLayout';
import { IntroSection } from '@/src/components/IntroSection';
import { ExperienceSection } from '@/src/components/ExperienceSection';


export default function Home() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
        <WindowLayout>
            <div className='flex flex-col space-y-4 w-[80vw] mx-auto flex flex-col'>
                <IntroSection />
                <ExperienceSection />

                
           
            </div>

        </WindowLayout>
    </main>
  );
}