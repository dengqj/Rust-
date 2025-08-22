import React, { useState, useCallback, useMemo } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';
import CheckIcon from './icons/CheckIcon';

// Declare hljs to satisfy TypeScript since it's loaded from a CDN
declare const hljs: any;

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const [isCopied, setIsCopied] = useState(false);

    // Use useMemo to highlight the code only when it changes.
    // This declarative approach works better with React's rendering model by
    // generating the HTML string directly instead of manipulating the DOM in an effect.
    const highlightedCode = useMemo(() => {
        // Ensure hljs and the rust language definition are available (loaded from CDN)
        if (typeof hljs !== 'undefined' && hljs.getLanguage('rust')) {
            // Use hljs.highlight to get the highlighted HTML string
            return hljs.highlight(code, { language: 'rust', ignoreIllegals: true }).value;
        }
        // Fallback to un-highlighted, HTML-escaped code if hljs is not ready
        return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }, [code]);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    }, [code]);

    return (
        <div className="rounded-lg overflow-hidden border border-slate-700 relative group">
            <pre className="hljs p-4 text-sm overflow-x-auto">
                <code
                    className="font-mono language-rust"
                    // Use dangerouslySetInnerHTML to render the pre-formatted HTML from highlight.js
                    // This is the correct way to inject HTML and tells React not to manage its contents.
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 bg-slate-700/60 rounded-md text-slate-400 hover:bg-slate-600/80 hover:text-slate-200 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Copy code"
            >
                {isCopied ? (
                    <CheckIcon className="w-5 h-5 text-green-400" />
                ) : (
                    <ClipboardIcon className="w-5 h-5" />
                )}
            </button>
        </div>
    );
};

export default CodeBlock;
