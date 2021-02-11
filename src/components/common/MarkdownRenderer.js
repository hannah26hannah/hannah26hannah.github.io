import React from 'react';
import ReactMarkdown from 'react-markdown';
// import { render } from 'react-dom';

const markdown = `# hello`
const Hello = () => { 
    return (
        <ReactMarkdown>{markdown}</ReactMarkdown>
    )
}
// render(<ReactMarkdown> {markdown}</ReactMarkdown >, document.body)

export default Hello;

