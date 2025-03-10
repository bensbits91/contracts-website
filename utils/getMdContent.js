import fs from 'fs';
import path from 'path';

const getMdContent = slug => {
   const mdPath = `app/content/${slug}.md`;
   const filePath = path.join(process.cwd(), mdPath);
   if (
      !slug ||
      !mdPath ||
      !fs.existsSync(mdPath) ||
      !filePath ||
      !fs.existsSync(filePath)
   ) {
      return null;
   }
   const markdownContent = fs.readFileSync(filePath, 'utf8');
   return markdownContent;
};

export default getMdContent;
