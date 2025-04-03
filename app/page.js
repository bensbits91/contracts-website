// import styles from './page.module.css';
import MdRenderer from '@/lib/MdRenderer';
import getMdContent from '@/utils/getMdContent';
import { Section } from '@/app/components/layout';

export default function Home() {
   return (
      <>
         <Section height='full' width='sm' bg='dark_gradient'>
            <MdRenderer md={getMdContent('home/hero')} />
         </Section>
         <Section height='full' width='sm' bg='link_gradient'>
            <MdRenderer inverted md={getMdContent('home/cta-1')} />
         </Section>
         <Section height='full' width='sm' bg='darker_2'>
            <MdRenderer md={getMdContent('home/expert')} />
         </Section>
         <Section height='full' width='sm' bg='link_gradient'>
            <MdRenderer inverted md={getMdContent('home/discounts')} />
         </Section>
         <Section height='full' bg='darker_2'>
            <MdRenderer md={getMdContent('home/better-than-wix')} />
         </Section>
         {/* <Section height='lg' bg='lighter_1'>
            <MdRenderer md={getMdContent('home/expert')} />
         </Section>
         <Section height='lg' bg='pink_gradient'>
            <MdRenderer inverted md={getMdContent('home/expert')} />
         </Section>
         <Section height='lg' bg='lighter_2'>
            <MdRenderer md={getMdContent('home/expert')} />
         </Section>
         <Section height='lg'>
            <MdRenderer md={getMdContent('home/expert')} />
         </Section> */}
      </>
   );
}
