import { Section } from '@/app/components/layout';
import { Heading } from '@/app/components/typography';
import { Accordion } from '@/app/components/collapsible';
import { faq } from '@/app/data/faq';

const FAQ = () => {
   return (
      <>
         <Section>
            <Heading level='1'>FAQ</Heading>
         </Section>
         <Section height='sm'>
            <Accordion collapsibleItems={faq} />
         </Section>
      </>
   );
};

export default FAQ;
