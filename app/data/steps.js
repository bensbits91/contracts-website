const notSure = {
   text: "I'm not sure what I need.",
   description: "Let's figure this out together."
};

const writeOwn = {
   text: 'Write my own',
   description: "I'll write my own answer"
};

const commonChoices = [writeOwn, notSure];

const start = {
   slug: 'start',
   heading: 'What kind of project?',
   description: 'Do you need a website, an app, or a mix of both?',
   moreInfo:
      'Websites primarily display content. Apps enable users to sign in, save stuff, sort and filter tables...',
   nextSlug: 'new-project',
   choices: [
      {
         text: 'Static Website',
         description: "Static content that doesn't change. Minimal user interaction.",
         moreInfo:
            'Examples: Portfolio, landing page, blog... Usually focused on SEO, content and performance. Might include a contact form or newsletter signup.'
      },
      {
         text: 'App',
         description:
            'Users will interact with the app, click buttons, fill out forms, save things, etc.',
         moreInfo:
            'Examples: Social network, e-commerce, productivity, data collection, data management... Usually focused user interactions and performance.'
      },
      {
         text: 'Hybrid',
         description:
            'A website with some pages that have dynamic content and user interaction',
         moreInfo:
            'Examples: Blog with comments, marketing site with forms and customer journeys...'
      }
   ]
};

const introQs = [
   {
      slug: 'new-project',
      heading: 'Existing or New?',
      description:
         'Are we starting from scratch, enhancing your existing project, or somewhere in between?',
      moreInfo:
         'Ben can help either way. Whether you have a clear vision or need help figuring out what you need, Ben can propose a plan.',
      nextSlug: 'design',
      choices: [
         {
            text: 'New project',
            description: 'I have ideas but nothing has been built yet.',
            moreInfo:
               "We'll start from scratch. I can help figure out how to meet your goals and propose tools and a plan."
         },
         {
            text: 'Existing project',
            description: 'I have a website or app that needs to be updated or improved.',
            moreInfo: "We'll review your current project and discuss how to improve it."
         }
      ]
   }
];

const designQs = [
   {
      slug: 'design',
      heading: 'Design',
      description: 'Do you need design help?',
      moreInfo:
         'Ben can help with design, or you can provide designs. Ben can also recommend a solid designer or work with your designer.',
      nextSlug: 'content-storage',
      choices: [
         {
            text: 'Yes, I need design help',
            description: 'I need help designing my website or app.',
            moreInfo:
               "Ben can help with design, recommend a one of his preferred designers or work with your designer. Ben's designer will help us create a Figma or Sketch file with style definitions to facilitate fast development and iteration.",
            nextSlug: 'design-type'
         },
         {
            text: "No, I don't need help with design",
            description: 'I have a design ready to go.',
            moreInfo:
               'The more detail you can provide, the quicker I can achieve your vision. For example, a Figma or Sketch file with style definitions facilitates fast development and iteration. I can also work with any design system or style guide. If you have a design but need help with implementation, I can help with that too. If you like an existing website or app, I can emulate the design.'
         }
      ]
   },
   {
      slug: 'design-type',
      showIf: [{ stepSlug: 'design', choiceText: 'Need design help' }],
      heading: 'Design Type',
      description: 'What type of design do you need?',
      moreInfo: '',
      nextSlug: 'design-vision',
      multi: true,
      choices: [
         {
            text: 'UI/UX',
            description: '',
            moreInfo:
               'UI/UX design focuses on creating intuitive and engaging interfaces that provide a seamless user experience. This includes wireframes, prototypes, and user testing to ensure the design meets user needs.'
         },
         {
            text: 'Branding',
            description: 'Brand identity and visual design.',
            moreInfo:
               "Branding design involves creating a cohesive visual identity for your brand, including logos, color schemes, typography, and other design elements that reflect your brand's personality and values."
         },
         {
            text: 'Marketing',
            description: 'Design for marketing materials and campaigns.',
            moreInfo:
               'Marketing design includes creating visuals for marketing campaigns, such as social media graphics, email templates, banners, and other promotional materials that help you reach and engage your target audience.'
         }
      ]
   },
   {
      slug: 'design-vision',
      showIf: [{ stepSlug: 'design', choiceText: 'Need design help' }],
      heading: 'Design Vision',
      description: 'Do you have a design vision?',
      moreInfo: '',
      nextSlug: 'designers',
      choices: [
         {
            text: 'Yes, I have a vision in mind',
            description: 'I have a clear idea of what I want the design to look like.',
            moreInfo:
               'If you have a specific vision for your design, please share any sketches, references, or inspiration that can help us understand your vision and bring it to life.'
         },
         {
            text: 'I want to emulate something',
            description: 'I like the design of an existing website or app.',
            moreInfo:
               "If someone else's design meets your needs, we can take inspiration from it and create a similar look and feel for your project while ensuring it aligns with your brand."
         },
         {
            text: 'I have a message or theme',
            description: 'I need to support my brand or convey my message.',
            moreInfo:
               "If you have a specific message or theme you want to convey, we can create a design that effectively communicates your brand's story and values."
         },
         {
            text: 'No, I need to start from scratch',
            description: 'I need help developing a design from the ground up.',
            moreInfo:
               "If you don't have a design vision yet, don't worry. We can work together to develop a design that meets your needs and goals."
         }
      ]
   },
   {
      slug: 'designers',
      showIf: [{ stepSlug: 'design', choiceText: 'Need design help' }],
      heading: 'Designers',
      description: 'Who will provide the design?',
      moreInfo: '',
      nextSlug: 'content-storage',
      choices: [
         {
            text: 'Me',
            description: "I'll provide the designs to Ben.",
            moreInfo:
               'If you have your own designs, Ben can bring them to life. Figma, Sketch, or Adobe XD files are great, but we can work with just about anything.'
         },
         {
            text: 'My designer',
            description: "I'll work with a designer to provide designs to Ben.",
            moreInfo:
               "If you have a designer, we can collaborate with them to ensure the designs are implemented correctly and meet your project's requirements."
         },
         {
            text: 'Ben',
            description:
               'Ben provides solid design guidance at a lower rate than a dedicated designer.',
            moreInfo:
               'Ben can handle the design work for your project, providing a cost-effective solution that ensures a cohesive and high-quality design.'
         },
         {
            text: "Ben's designer",
            description:
               'Ben has a couple of prefered designers. Ben will manage the relationship.',
            moreInfo:
               'If you prefer, Ben can work with one of his trusted designers to create the design for your project. Ben will manage the relationship and ensure the design meets your needs.'
         }
      ]
   }
];

const contentQs = [
   {
      slug: 'content-storage',
      heading: 'Content',
      description: 'Where will we store content?',
      moreInfo:
         'Choosing the right content storage solution is crucial for managing and delivering your content efficiently. Consider your needs for scalability, ease of use, and integration with other tools.',
      nextSlug: 'content-editors',
      choices: [
         {
            text: 'In a custom CMS',
            description:
               'Store content in the same database as your app data or a dedicated storage location. Manage the content with a CMS built by Ben.',
            moreInfo:
               'A custom CMS allows for tailored content management solutions that fit your specific needs. It provides flexibility and control over your content, but requires development and maintenance.'
         },
         {
            text: 'In a hosted CMS',
            description:
               'Store content in a separate CMS like WordPress, Contentful, etc.',
            moreInfo:
               'A hosted CMS offers a user-friendly interface and built-in features for managing content. It is easy to set up and maintain, but may have limitations in customization and scalability.'
         },
         {
            text: "In my app's file system",
            description:
               'Files stored with the code, such as JSON or Markdown. Very simple. No need for a CMS.',
            pros: [
               'Fast: No need to fetch content from somewhere else',
               'Very simple',
               'No need to use a CMS',
               'No need to pay for CMS hosting'
            ],
            cons: [
               'No user-friendly interface',
               'Requires code changes to update content',
               'Requires deployment to update content'
            ],
            moreInfo:
               "Storing content in the app's file system is a straightforward approach that eliminates the need for a separate CMS. It is suitable for small projects with infrequent content updates, but lacks a user-friendly interface for non-developers."
         }
      ]
   },
   {
      slug: 'content-editors',
      showIf: [{ stepSlug: 'content-storage' }],
      heading: 'Content Editors',
      description: 'Who will update content?',
      moreInfo:
         'Deciding who will manage your content is important for ensuring timely updates and maintaining content quality. Consider the skills and availability of your content editors.',
      nextSlug: 'page-count',
      multi: true,
      choices: [
         {
            text: 'Me',
            description: "I'll manage my content myself.",
            moreInfo:
               'Managing your own content gives you full control and flexibility. It is ideal if you have the time and skills to handle content updates and maintenance.'
         },
         {
            text: 'Ben',
            description:
               "Ben is a solid content author and editor. There are better content specialists available, but using Ben's skills may be more cost-effective.",
            moreInfo:
               "Ben can manage your content efficiently, providing a cost-effective solution. While there are specialized content authors available, Ben's skills and familiarity with your project can be advantageous."
         },
         {
            text: 'My content author',
            description: 'I have a content author who will manage content.',
            moreInfo:
               'If you have a dedicated content author, they can ensure your content is updated regularly and maintains a consistent quality. Collaboration with your content author can streamline the content management process.'
         },
         {
            text: "Ben's content author",
            description:
               'Ben has a few prefered authors. Ben will manage the relationship. We can select an author based on the details of the project.',
            moreInfo:
               'Ben can connect you with trusted content authors who have experience in managing content for similar projects. Ben will oversee the relationship to ensure the content meets your standards and project requirements.'
         }
      ]
   }
];

const pageQs = [
   {
      slug: 'page-count',
      heading: 'Pages',
      description: 'Approximately how many pages will your website have?',
      moreInfo:
         'Understanding the number of pages helps in estimating the scope of the project and planning the structure and navigation of your website.',
      nextSlug: 'image-count',
      choices: [
         {
            text: '1-9',
            description: 'A small website with a few pages.',
            moreInfo:
               'Ideal for simple websites like portfolios, landing pages, or small business sites. Easier to manage and maintain.'
         },
         {
            text: '10-49',
            description: 'A medium-sized website with multiple sections.',
            moreInfo:
               'Suitable for businesses or organizations that need to provide more information and have multiple sections like services, about, blog, and contact pages.'
         },
         {
            text: '50-100',
            description: 'A large website with extensive content.',
            moreInfo:
               'Great for larger businesses, e-commerce sites, or content-heavy websites. Requires more planning for content organization and navigation.'
         },
         {
            text: 'More',
            description:
               'A very large website with extensive content and multiple sections.',
            moreInfo:
               'Ideal for enterprises, large e-commerce sites, or websites with a vast amount of content. Requires detailed planning and robust content management.'
         }
      ]
   }
];

const imageQs = [
   {
      slug: 'image-count',
      heading: 'Images',
      description: 'How many images will your website have?',
      moreInfo:
         'Understanding the number of images helps in planning the storage, optimization, and overall design of your website.',
      nextSlug: 'image-types',
      choices: [
         {
            text: 'None',
            description: 'No images will be used on the website.',
            moreInfo:
               'Ideal for text-heavy websites or minimalistic designs. This option simplifies the design and reduces load times.',
            nextSlug: 'data-storage'
         },
         {
            text: '1-9',
            description: 'A small number of images.',
            moreInfo:
               'Suitable for websites with a few key visuals, such as a portfolio or a small business site. Easier to manage and optimize.'
         },
         {
            text: '10-49',
            description: 'A moderate number of images.',
            moreInfo:
               'Ideal for websites that require a balance of text and visuals, such as blogs, service pages, or informational sites. Requires some planning for optimization and storage.'
         },
         {
            text: '50-100',
            description: 'A large number of images.',
            moreInfo:
               'Great for content-heavy websites, e-commerce sites, or galleries. Requires careful planning for optimization, storage, and load times.'
         },
         {
            text: 'More',
            description: 'A very large number of images.',
            moreInfo:
               'Suitable for enterprises, large e-commerce sites, or websites with extensive visual content. Requires robust storage solutions and advanced optimization techniques.'
         }
      ]
   },
   {
      slug: 'image-types',
      showIf: [
         { stepSlug: 'image-count', choiceText: '1-9' },
         { stepSlug: 'image-count', choiceText: '10-49' },
         { stepSlug: 'image-count', choiceText: '50-100' },
         { stepSlug: 'image-count', choiceText: 'More' }
      ],
      heading: 'Image Types',
      description: 'What types of images will you have?',
      moreInfo:
         'Different types of images may require different handling and optimization techniques. Understanding the types of images helps in planning the design and technical implementation.',
      nextSlug: 'image-optimization',
      multi: true,
      choices: [
         {
            text: 'Photos',
            description: 'Photographic images.',
            moreInfo:
               'Photos are typically high-resolution images that may require compression and optimization to ensure fast load times.'
         },
         {
            text: 'Icons',
            description: 'Small graphical symbols.',
            moreInfo:
               'Icons are usually vector-based and can be optimized for performance. They are often used for navigation, buttons, and other UI elements.'
         },
         {
            text: 'Illustrations',
            description: 'Drawn or digitally created images.',
            moreInfo:
               'Illustrations can add a unique and artistic touch to your website. They may require optimization to balance quality and performance.'
         },
         {
            text: 'Logos',
            description: 'Brand logos and trademarks.',
            moreInfo:
               'Logos are essential for brand identity. They should be optimized for various screen sizes and resolutions to maintain clarity and quality.'
         },
         {
            text: 'Other',
            description: 'Other types of images.',
            moreInfo:
               'If you have other types of images, please specify. This helps in planning the appropriate handling and optimization techniques.'
         }
      ]
   },
   {
      slug: 'image-optimization',
      showIf: [
         { stepSlug: 'image-count', choiceText: '1-9' },
         { stepSlug: 'image-count', choiceText: '10-49' },
         { stepSlug: 'image-count', choiceText: '50-100' },
         { stepSlug: 'image-count', choiceText: 'More' }
      ],
      heading: 'Image Optimization',
      description: 'Will you need help optimizing images?',
      moreInfo:
         'Optimizing images is crucial for improving load times and overall website performance. It involves compressing images, resizing them, and using appropriate formats.',
      nextSlug: 'image-storage',
      choices: [
         {
            text: 'Yes',
            description: 'I need help optimizing images.',
            moreInfo:
               'I can help optimize your images to ensure they load quickly and look great on all devices. This includes compression, resizing, and format conversion.'
         },
         {
            text: 'No',
            description: 'I will handle image optimization myself.',
            moreInfo:
               'If you prefer to handle image optimization yourself, make sure to follow best practices to ensure fast load times and high-quality visuals.'
         }
      ]
   },
   {
      slug: 'image-storage',
      showIf: [
         { stepSlug: 'image-count', choiceText: '1-9' },
         { stepSlug: 'image-count', choiceText: '10-49' },
         { stepSlug: 'image-count', choiceText: '50-100' },
         { stepSlug: 'image-count', choiceText: 'More' }
      ],
      heading: 'Image Storage',
      description: 'Where will we store images?',
      moreInfo:
         'Choosing the right storage solution for your images is important for ensuring fast load times and easy management.',
      nextSlug: 'data-storage',
      choices: [
         {
            text: 'In my app',
            description: 'Store images within the app itself.',
            moreInfo:
               'Storing images within the app is a simple solution for small projects. It eliminates the need for external storage but requires proper handling to avoid performance impacts.'
         },
         {
            text: 'In a CDN',
            description: 'Store images in a Content Delivery Network (CDN).',
            moreInfo:
               'Using a CDN for image storage ensures fast delivery of images to users worldwide. It improves load times and reduces the load on your server.'
         },
         {
            text: 'In a cloud storage service',
            description:
               'Store images in a cloud storage service like AWS S3, Google Cloud Storage, etc.',
            moreInfo:
               'Cloud storage services provide scalable and reliable storage solutions for your images. They offer features like automatic backups, easy access, and integration with other tools.'
         }
      ]
   }
];

const dataQs = [
   {
      slug: 'data-storage',
      heading: 'Data',
      description: 'Will you need to store data?',
      moreInfo:
         'Determining whether you need to store data helps in planning the database and data management strategy for your project.',
      nextSlug: 'caching',
      choices: [
         {
            text: 'Need to store data',
            description:
               'I need to store data related to my app or website. This could be user data, info about your products and services, etc.',
            moreInfo:
               'This option is suitable for projects that require dynamic data storage, such as user information, product details, or other structured data. A database will be set up to manage and store this data.',
            nextSlug: 'db-type'
         },
         {
            text: 'No database',
            description:
               "I don't need to store data. I just need a simple website. My content and data will be managed within the website itself.",
            moreInfo:
               'This option is suitable for static websites or projects that do not require dynamic data storage. Content and data will be managed directly within the website files.'
         }
      ]
   },
   {
      slug: 'db-type',
      showIf: [{ stepSlug: 'data-storage', choiceText: 'Need to store data' }],
      heading: 'Database Type',
      description: 'What type of database do you need?',
      moreInfo:
         'Choosing the right type of database is crucial for managing your data efficiently. Consider the structure and requirements of your data when making this decision.',
      nextSlug: 'db-access',
      choices: [
         {
            text: 'Relational Database',
            description:
               'SQL databases like MySQL, PostgreSQL, etc. These are good for structured data.',
            moreInfo:
               'Relational databases are ideal for structured data that requires complex queries and transactions. They use SQL for data management and are suitable for applications with well-defined data relationships.'
         },
         {
            text: 'NoSQL Database',
            description:
               'MongoDB, Cassandra, etc. These are good for unstructured data and can facilitate quick development and scalability.',
            moreInfo:
               'NoSQL databases are ideal for unstructured or semi-structured data. They offer flexibility in data modeling and are suitable for applications that require high scalability and performance.'
         }
      ]
   },
   {
      slug: 'db-access',
      showIf: [{ stepSlug: 'data-storage', choiceText: 'Need to store data' }],
      heading: 'Database Access',
      description: 'Will users need to be able to add, edit, or delete data?',
      moreInfo:
         'Determining user access to the database helps in planning the security and functionality of your application. Consider the level of interaction users will have with the data.',
      nextSlug: 'caching',
      choices: [
         {
            text: 'No user access',
            description:
               'My app will pull data from the database, but users will not be able to add, edit, or delete data.',
            moreInfo:
               'This option is suitable for applications where data is managed by administrators or the system itself, and users only have read access to the data.'
         },
         {
            text: 'User access',
            description: 'Users will be able to add, edit, or delete data.',
            moreInfo:
               'This option is suitable for applications that require user interaction with the data, such as social networks, e-commerce sites, or content management systems. Proper security measures will be implemented to manage user access.'
         }
      ]
   }
];

const cachingQs = [
   {
      slug: 'caching',
      heading: 'Caching',
      description: 'Will you need to cache data?',
      moreInfo:
         'Caching data can improve the performance and speed of your application by storing frequently accessed data in memory or on disk.',
      nextSlug: 'caching-location',
      choices: [
         {
            text: 'Yes',
            description: 'I need to cache data to improve performance.',
            moreInfo:
               'Caching data can help reduce load times and improve the overall performance of your application. It stores frequently accessed data in memory or on disk for quick retrieval.'
         },
         {
            text: 'No',
            description: 'I do not need to cache data.',
            moreInfo:
               'If your application does not require caching, data will be fetched from the source each time it is requested. This may result in slower load times for certain operations.',
            nextSlug: 'user-accounts'
         }
      ]
   },
   {
      slug: 'caching-location',
      showIf: [{ stepSlug: 'caching', choiceText: 'Yes' }],
      heading: 'Caching Location',
      description: 'Where should we cache data?',
      moreInfo:
         'Choosing the right location for caching data is important for optimizing performance and ensuring data availability. Consider the type of data you need to cache and the frequency of access when making this decision. If needed, we can cache data in more than one location with different expiration times.',
      nextSlug: 'user-accounts',
      multi: true,
      choices: [
         {
            text: 'CDN',
            description: 'Content Delivery Network',
            moreInfo:
               'A CDN caches static assets like images, CSS, and JavaScript files to deliver content quickly to users worldwide. It improves load times and reduces server load.'
         },
         {
            text: 'Server-side',
            description: 'Cache data on the server.',
            moreInfo:
               'Server-side caching stores data on the server to reduce database queries and improve response times. It is suitable for dynamic data that is frequently accessed.'
         },
         {
            text: 'Client-side',
            description: 'Cache data in the user’s browser.',
            moreInfo:
               'Client-side caching stores data in the user’s browser to reduce server requests and improve performance. It is suitable for static data that does not change frequently.'
         }
      ]
   }
];

const userQs = [
   {
      slug: 'user-accounts',
      heading: 'Users',
      description: 'Will users need to sign up and log in?',
      moreInfo:
         'Implementing user accounts allows users to access personalized features, save preferences, and interact with your application securely.',
      nextSlug: 'user-roles',
      choices: [
         {
            text: 'Yes',
            description: 'Users will need to sign up and log in.',
            moreInfo:
               'User accounts enable users to access personalized features, save preferences, and interact securely with your application. User authentication and authorization will be implemented to manage user access.'
         },
         {
            text: 'No',
            description: 'Users will not need to sign up or log in.',
            moreInfo:
               'If your application does not require user accounts, users can access the content and features without signing up or logging in.',
            nextSlug: 'contact'
         }
      ]
   },
   {
      slug: 'user-roles',
      showIf: [{ stepSlug: 'user-accounts', choiceText: 'Yes' }],
      heading: 'User Roles',
      description:
         'Will there be different user roles? Read-only users, editors, admins, etc.',
      moreInfo:
         'Assigning different roles to users allows you to control access to specific features and content based on user permissions. Consider the level of access and functionality required for each user role.',
      nextSlug: 'protected-pages',
      choices: [
         {
            text: 'Yes',
            description: 'There will be different user roles with varying permissions.',
            moreInfo:
               'Implementing user roles allows you to define different levels of access and permissions for users based on their roles. This ensures that users can only access the features and content relevant to their role.'
         },
         {
            text: 'No',
            description: 'All users will have the same level of access.',
            moreInfo:
               'If all users will have the same level of access and permissions, there is no need to implement user roles. All users will be able to access the same features and content.'
         }
      ]
   },
   {
      slug: 'protected-pages',
      showIf: [{ stepSlug: 'user-accounts', choiceText: 'Yes' }],
      heading: 'Protected Pages',
      description: 'Will some pages only be availble for authenticated users?',
      moreInfo:
         'Protecting pages ensures that only authenticated users can access certain content or features. Consider the pages that require user authentication and the level of access needed for each page.',
      nextSlug: 'contact',
      choices: [
         {
            text: 'Yes',
            description: 'Some pages will be protected and require authentication.',
            moreInfo:
               'Protecting pages ensures that only authenticated users can access specific content or features. This is useful for pages that contain sensitive information or require user interaction.'
         },
         {
            text: 'No',
            description: 'All pages will be accessible to all users.',
            moreInfo:
               'If all pages will be accessible to all users, there is no need to implement page protection. Users will be able to access all content and features without authentication.'
         }
      ]
   }
];

const forms = [
   {
      slug: 'contact',
      hasHelp: false,
      heading: 'Your Contact Info',
      description: "Let's connect!",
      nextSlug: 'submit',
      form: [
         {
            name: 'Email',
            type: 'email',
            required: true
         },
         {
            name: 'Name',
            type: 'text'
         },
         {
            name: 'Phone',
            type: 'phone'
         },
         {
            name: 'Next',
            type: 'button'
         }
      ]
   },
   {
      slug: 'submit',
      hasHelp: false,
      heading: 'All set!',
      description: 'Anything else?',
      nextSlug: 'end',
      form: [
         {
            name: 'Notes',
            type: 'textarea',
            placeholder:
               'Optional: Any questions for me? Any details that will help me understand your needs?'
         },
         {
            name: 'Submit',
            type: 'submit'
         }
      ]
   }
];

const end = {
   slug: 'end',
   hasHelp: false,
   heading: 'Sweet',
   description: "Thanks! I'll be in touch ASAP...",
   whatsNext:
      "I'll review your answers and get back to you with a proposal. I'll reach out if I have any questions. Then we can review the proposal together and make any necessary adjustments."
};

const noMoreInfo =
   "I haven't written help content for this choice yet. We can figure it out together.";

const aggregatedSteps = [
   start,
   ...introQs,
   ...designQs,
   ...contentQs,
   ...pageQs,
   ...imageQs,
   ...dataQs,
   ...cachingQs,
   ...userQs,
   ...forms,
   end
];

export const steps = aggregatedSteps.map(step => {
   const { choices } = step;
   if (choices) {
      step.choices = choices.map(choice => {
         if (choice.moreInfo || choice.pros || choice.cons) return choice;
         return {
            ...choice,
            moreInfo: noMoreInfo // append default help content
         };
      });
      step.choices = [...step.choices, ...commonChoices]; // append common choices
   }
   return step;
});
