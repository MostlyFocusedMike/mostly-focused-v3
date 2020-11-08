import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Prism from "prism-react-renderer/prism";
import dracula from 'prism-react-renderer/themes/dracula'; // decides colors, goes in the highlight prop 'theme'
import './src/styles/global.scss'

// this is how you include other prism language support
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-docker");

/* eslint-disable */
// this all just gets us syntax highlighting
const component = {
  pre: (props) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <>
        <Highlight
          {...defaultProps}
          code={props.children.props.children}
          language={
            matches?.groups?.lang ?? ''
          }
          theme={dracula}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {
                tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))
              }
            </pre>
          )}
        </Highlight>
      </>
    );
  },
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};
