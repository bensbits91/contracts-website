import React from 'react';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import { Heading, Text, List } from '@/app/components/typography';
import { Button } from '@/app/components/inputs';

const MdRenderer = ({ md, inverted = false }) => {
   const { window } = new JSDOM('');
   const DOMPurify = createDOMPurify(window);
   const sanitizedMarkdown = DOMPurify.sanitize(md);

   const hasClasses = children =>
      children && typeof children === 'string' && children.indexOf('{') === 0;

   const getTextAndClasses = (children, separator = '\n') => {
      const arr = children.split(separator);
      const text = arr[1];
      const classes = JSON.parse(arr[0]);
      return { text, classes };
   };

   const RenderHeading =
      level =>
      ({ node, ...props }) => {
         const { children } = props;

         if (hasClasses(children)) {
            const { text, classes } = getTextAndClasses(children);
            const { color, top, bottom } = classes;

            return (
               <Heading
                  level={level}
                  color={color}
                  top={top}
                  bottom={bottom}
                  inverted={inverted}>
                  {text}
               </Heading>
            );
         }

         return (
            <Heading level={level} inverted={inverted}>
               {children}
            </Heading>
         );
      };
   RenderHeading.displayName = 'RenderHeading';

   const RenderParagraph = ({ node, ...props }) => {
      const { children } = props;

      if (hasClasses(children)) {
         const { text, classes } = getTextAndClasses(children);
         const { variant, top, bottom } = classes;

         return (
            <Text variant={variant} top={top} bottom={bottom} inverted={inverted}>
               {text}
            </Text>
         );
      }

      return <Text inverted={inverted}>{children}</Text>;
   };
   RenderParagraph.displayName = 'RenderParagraph';

   const RenderLink = ({ node, ...props }) => {
      const { href, children } = props;

      if (hasClasses(children)) {
         const { text, classes } = getTextAndClasses(children, '~.~');
         const { variant, size } = classes;

         return (
            <Button variant={variant} size={size} inverted={inverted}>
               {text}
            </Button>
         );
      }

      return (
         <Button href={href} inverted={inverted}>
            {children}
         </Button>
      );
   };
   RenderLink.displayName = 'RenderLink';

   const RenderList =
      ordered =>
      ({ node, children, ...props }) => {
         const items = children
            .filter(child => child !== '\n') // markdown adds a newline character after each li
            .map(child => child.props.children); // get the text of each li

         return <List items={items} ordered={ordered} inverted={inverted} />;
      };

   // Add displayName to functions for easier debugging and to supress eslint errors
   RenderList.displayName = 'RenderList';

   return (
      <ReactMarkdown
         components={{
            h1: RenderHeading('1'),
            h2: RenderHeading('2'),
            h3: RenderHeading('3'),
            h4: RenderHeading('4'),
            h5: RenderHeading('5'),
            h6: RenderHeading('6'),
            p: RenderParagraph,
            a: RenderLink,
            ul: RenderList(),
            ol: RenderList(true)
         }}>
         {sanitizedMarkdown}
      </ReactMarkdown>
   );
};

export default MdRenderer;
