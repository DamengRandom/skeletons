import React from 'react';
import CodeBlock from "../atoms/CodeBlock";

export default function CodeBlockDemo() {
  return (
    <CodeBlock dataLang="Code Block Demo (Only)">
      {
        `
        background: black;
        color: white;
        font-size: 16px;
        padding: 6px;
        padding-top: 0;
        &:before {
            display: block;
            width: calc(100%);
            padding: 6px;
            margin-left: -6px;
            text-transform: uppercase;
            content: attr(data-lang);
            background: #db2938;
            color: white;
        }
        `
      }
    </CodeBlock>
  )
}
