// import styles from './page.module.css';
import MdRenderer from '@/lib/MdRenderer';
import getMdContent from '@/utils/getMdContent';
import { Section } from '@/app/components/layout';

export default function Home() {
   return (
      <>
         <Section height='lg'>
            <MdRenderer md={getMdContent('home/home-hero')} />
         </Section>
         <Section bg='pop'>
            <MdRenderer md={getMdContent('home/home-section-one')} />
         </Section>
      </>
   );
}
