import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import htmlParser from 'react-markdown/plugins/html-parser';

const parseHtml = htmlParser({
    isValidNode: (node) => node.type !== 'script',
    processingInstructions: [{
        shouldProcessNode: (node) => node && ['span', 'a', 'img', 'image'].includes(node.name),
        processNode: (node) => { 
            let style = {};
            let link = '';
            let src = '';
            let alt = '';
            if (node.attribs && node.attribs.style) {  // style
                style.color = findStyleColor(node.attribs.style, 'color');
            }
            if (node.attribs && node.attribs.href) { // href
                link = node.attribs.href;
            }
            if (node.attribs && node.attribs.src) { // img
                src = node.attribs.src;
                alt = node.attribs.alt;
            }
           
            return <node.name style={style} href={link} src={src} alt={ alt }/>
        } 

    }]
})

function findStyleColor(styleStr, target) { 
    const color = new RegExp(`${target}\\s*:\\s*[#a-zA-Z0-9]+`).exec(styleStr);
    if (color && color.length > 0) { 
        const colorArr = color[0].split(':');
        if (colorArr.length > 1) { 
            return colorArr[1]
        }
    }
    return null;
}

const CodeBlock = ({ language, value }) => { 
    return (
        <SyntaxHighlighter language={language} style={tomorrow}>
            { value }
        </SyntaxHighlighter>
    )
}

const InlineCodeBlock = (props) => { 
    return (
        <span style={{
            background: 'hsl(60, 1%, 97%)',
            color: 'hsl(348, 100%, 61%)',
            fontSize: '0.85em',
            padding: '3px 3px',
            borderRadius: '2px',
            whiteSpace: 'nowrap'
        }}>
            {props.value}
        </span>
    )
}

const BlockQuoteBlock = (props) => { 
    return (
        <div style={{
            borderLeft: '5px solid lightgray',
            paddingLeft: '1rem',
            margin: '1rem 0'
        }}>
            {props.children}
        </div>
    )
}


export default class MarkdownRenderer extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            markdown: props.source,
        }
    }
    
    render() { 
        return (
             <>
                <ReactMarkdown
                    source={this.state.markdown}
                    skipHtml={false}
                    escapeHtml={false}
                    astPlugins={[parseHtml]}
                    renderers={{
                        code: CodeBlock,
                        inlineCode: InlineCodeBlock,
                        blockquote: BlockQuoteBlock,
                    }} />
            </>
        )
    } 
}