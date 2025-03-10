import MdRenderer from '@/lib/MdRenderer';
import getMdContent from '@/utils/getMdContent';
import { Section } from '@/app/components/layout';

const MyPage = () => {
   const mdContent = getMdContent('md-slug-one');
   const mdContentTwo = getMdContent('md-slug-two');

   return (
      <>
         <Section>
            <MdRenderer md={mdContent} />
         </Section>
         <Section>
            <MdRenderer md={mdContentTwo} />
         </Section>
      </>
   );
};

export default MyPage;
