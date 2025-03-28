import { Section } from '@/app/components/layout';
import { Heading } from '@/app/components/typography';
import { ContactForm } from '@/app/components/contact';

const ContactPage = () => (
   <>
      <Section bottom='sm' width='sm'>
         <Heading level={1}>Contact Me</Heading>
      </Section>
      <Section top='sm' width='sm'>
         <ContactForm />
      </Section>
   </>
);

export default ContactPage;
