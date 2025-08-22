
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { curriculumData } from './data/curriculum';
import type { Level } from './types';

export type Language = 'en' | 'zh';

const App: React.FC = () => {
    const [activeTopicId, setActiveTopicId] = useState<string>('level-1');
    const [language, setLanguage] = useState<Language>('zh');

    const activeTopic = useMemo(() => {
        for (const level of curriculumData) {
            const foundTopic = level.topics.find(topic => topic.id === activeTopicId);
            if (foundTopic) {
                return foundTopic;
            }
        }
        return curriculumData[0].topics[0]; // Fallback to the first topic
    }, [activeTopicId]);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-slate-900 text-slate-300">
            <Sidebar 
                levels={curriculumData as Level[]} 
                activeTopicId={activeTopicId} 
                onSelectTopic={setActiveTopicId} 
                language={language}
            />
            <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
                <div className="max-w-4xl mx-auto mb-6 flex justify-end">
                    <div className="inline-flex rounded-md shadow-sm bg-slate-800 border border-slate-700">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-4 py-2 text-sm font-medium rounded-l-md transition-colors ${
                                language === 'en'
                                    ? 'bg-teal-500/20 text-teal-300'
                                    : 'text-slate-400 hover:bg-slate-700'
                            }`}
                        >
                            English
                        </button>
                        <button
                            onClick={() => setLanguage('zh')}
                            className={`px-4 py-2 text-sm font-medium rounded-r-md transition-colors ${
                                language === 'zh'
                                    ? 'bg-teal-500/20 text-teal-300'
                                    : 'text-slate-400 hover:bg-slate-700'
                            }`}
                        >
                            中文
                        </button>
                    </div>
                </div>
                <ContentDisplay topic={activeTopic} language={language} />
            </main>
        </div>
    );
};

export default App;
