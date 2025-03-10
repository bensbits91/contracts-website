import React from 'react';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';

const MdRenderer = ({ md }) => {
   const { window } = new JSDOM('');
   const DOMPurify = createDOMPurify(window);

   const sanitizedMarkdown = DOMPurify.sanitize(md);

   return <ReactMarkdown>{sanitizedMarkdown}</ReactMarkdown>;
};

export default MdRenderer;
