import React from 'react';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import { Heading, Text, List } from '@/app/components/typography';

const MdRenderer = ({ md }) => {
   const { window } = new JSDOM('');
   const DOMPurify = createDOMPurify(window);
   const sanitizedMarkdown = DOMPurify.sanitize(md);

   const hasClasses = children => children.indexOf('{') === 0;

   const getTextAndClasses = children => {
      const arr = children.split('\n');
      const text = arr[1];
      const classes = JSON.parse(arr[0]);
      return { text, classes };
   };

   const renderHeading =
      level =>
      ({ node, ...props }) => {
         const { children } = props;

         if (hasClasses(children)) {
            const { text, classes } = getTextAndClasses(children);
            const { color, top, bottom } = classes;

            return (
               <Heading
                  children={text}
                  level={level}
                  color={color}
                  top={top}
                  bottom={bottom}
               />
            );
         }

         return <Heading children={props.children} level={level} />;
      };

   const renderParagraph = ({ node, ...props }) => {
      const { children } = props;

      if (hasClasses(children)) {
         const { text, classes } = getTextAndClasses(children);
         const { variant, top, bottom } = classes;

         return <Text string={text} variant={variant} top={top} bottom={bottom} />;
      }

      return <Text string={children} />;
   };

   const renderList =
      ordered =>
      ({ node, children, ...props }) => {
         const items = children
            .filter(child => child !== '\n') // markdown adds a newline character after each li
            .map(child => child.props.children); // get the text of each li

         return <List items={items} ordered={ordered} />;
      };

   return (
      <ReactMarkdown
         components={{
            h1: renderHeading('1'),
            h2: renderHeading('2'),
            h3: renderHeading('3'),
            h4: renderHeading('4'),
            h5: renderHeading('5'),
            h6: renderHeading('6'),
            p: renderParagraph,
            ul: renderList(),
            ol: renderList(true)
         }}>
         {sanitizedMarkdown}
      </ReactMarkdown>
   );
};

export default MdRenderer;
