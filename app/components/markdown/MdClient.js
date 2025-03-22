import Markdown from 'markdown-to-jsx';
import { Heading, Text, List } from '@/app/components/typography';

const MdClient = ({ children }) => {
   const MdList = ({ children, ...props }) => {
      // wrapper for List component that enables us to pass children as list items
      return (
         <List ordered={props.ordered} items={children.map(c => c.props.children[0])} />
      );
   };

   const options = {
      overrides: {
         h1: {
            component: Heading,
            props: {
               level: 1
            }
         },
         h2: {
            component: Heading,
            props: {
               level: 2
            }
         },
         h3: {
            component: Heading,
            props: {
               level: 3
            }
         },
         h4: {
            component: Heading,
            props: {
               level: 4
            }
         },
         h5: {
            component: Heading,
            props: {
               level: 5
            }
         },
         h6: {
            component: Heading,
            props: {
               level: 6
            }
         },
         p: {
            component: Text
         },
         ul: {
            component: MdList
         },
         ol: {
            component: MdList,
            props: {
               ordered: 'true'
            }
         }
      }
   };

   return <Markdown options={options}>{children}</Markdown>;
};

export default MdClient;
