// import styles from './page.module.css';
import MdRenderer from '@/lib/MdRenderer';
import getMdContent from '@/utils/getMdContent';
import { Section } from '@/app/components/layout';

export default function Home() {
   return (
      <>
         <Section height='full' width='sm'>
            <MdRenderer md={getMdContent('home/hero')} />
         </Section>
         <Section height='lg' bg='darker_1'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
         <Section height='lg'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
         <Section height='lg' bg='darker_2'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
         <Section height='lg'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
         <Section height='lg' bg='lighter_1'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
         <Section height='lg'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
         <Section height='lg' bg='lighter_2'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
         <Section height='lg'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
      </>
   );
}
