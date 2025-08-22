
import React from 'react';
import type { Topic } from '../types';
import CodeBlock from './CodeBlock';
import type { Language } from '../App';

interface ContentDisplayProps {
    topic: Topic | null;
    language: Language;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ topic, language }) => {
    if (!topic) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-slate-500">Select a topic from the sidebar to begin.</p>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 pb-4 border-b-2 border-slate-700">
                {topic.title[language]}
            </h1>

            <section className="mb-8">
                <p className="text-lg text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    {topic.coreConcept[language]}
                </p>
            </section>
            
            {topic.exampleCode && (
                 <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-slate-200 mb-4">Example Code</h2>
                    <CodeBlock code={topic.exampleCode} />
                </section>
            )}

            <section>
                {topic.explanations.map((exp, index) => (
                    <div key={index} className="mb-6 bg-slate-800/30 p-5 rounded-lg border border-transparent hover:border-slate-700 transition-colors">
                        <h3 className="text-xl font-semibold text-teal-500 mb-2">{exp.title[language]}</h3>
                        <p className="text-slate-400 leading-relaxed">{exp.description[language]}</p>
                    </div>
                ))}
            </section>
        </article>
    );
};

export default ContentDisplay;
