
import React from 'react';
import type { Level } from '../types';
import type { Language } from '../App';

interface SidebarProps {
    levels: Level[];
    activeTopicId: string;
    onSelectTopic: (id: string) => void;
    language: Language;
}

const Sidebar: React.FC<SidebarProps> = ({ levels, activeTopicId, onSelectTopic, language }) => {
    return (
        <aside className="w-full md:w-72 lg:w-80 bg-slate-800/50 border-r border-slate-700 p-4 md:p-6 flex-shrink-0 md:h-screen md:sticky md:top-0 overflow-y-auto">
            <h1 className="text-2xl font-bold text-teal-400 mb-2">Rust Roadmap</h1>
            <p className="text-sm text-slate-400 mb-8">Type System as a Logic Engine</p>
            <nav>
                <ul>
                    {levels.map(level => (
                        <li key={level.id} className="mb-6">
                            <h2 className="text-xs uppercase font-bold text-slate-500 mb-2">{level.title[language]}</h2>
                            <p className="text-sm text-slate-400 mb-3 ml-2 border-l-2 border-slate-700 pl-3">{level.description[language]}</p>
                            <ul>
                                {level.topics.map(topic => (
                                    <li key={topic.id}>
                                        <button
                                            onClick={() => onSelectTopic(topic.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-slate-300 transition-colors duration-200 text-sm ${
                                                activeTopicId === topic.id 
                                                ? 'bg-teal-500/10 text-teal-300' 
                                                : 'hover:bg-slate-700/50'
                                            }`}
                                        >
                                            {topic.title[language]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
