const notSure = {
   text: "I'm not sure what I need.",
   description: "Let's figure this out together."
};

const writeOwn = {
   text: 'Write my own',
   description: "I'll write my own answer"
};

const commonChoices = [writeOwn, notSure];

// todo: moreInfo that shows if you click a question mark icon

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
      nextSlug: 'design',
      choices: [
         {
            text: 'New project',
            description: 'I have ideas but nothing has been built yet.'
         },
         {
            text: 'Existing project',
            description: 'I have a website or app that needs to be updated or improved.'
         }
      ]
   }
];

const designQs = [
   {
      slug: 'design',
      heading: 'Design',
      description: 'Do you need design help?',
      nextSlug: 'content-storage',
      choices: [
         {
            text: 'No design needed',
            description: 'I have a design ready to go.'
         },
         {
            text: 'Need design help',
            description: 'I need help with design.',
            nextSlug: 'design-type'
         }
      ]
   },
   {
      slug: 'design-type',
      showIf: [{ stepSlug: 'design', choiceText: 'Need design help' }],
      heading: 'Design Type',
      description: 'What type of design do you need?',
      nextSlug: 'design-vision',
      choices: [
         {
            text: 'UI/UX',
            description: 'asdf.'
         },
         {
            text: 'Branding',
            description: 'asdf.'
         },
         {
            text: 'Both',
            description: 'asdf.'
         }
      ]
   },
   {
      slug: 'design-vision',
      showIf: [{ stepSlug: 'design', choiceText: 'Need design help' }],
      heading: 'Design Vision',
      description: 'Do you have a design vision?',
      nextSlug: 'designers',
      choices: [
         {
            text: 'Yes, I have a vision in mind',
            description: 'asdf.'
         },
         {
            text: 'I want to emulate something',
            description: 'I like the design of an existing website or app.'
         },
         {
            text: 'I have a message or theme',
            description: 'I need to support my brand or convey my message.'
         },
         {
            text: 'No, I need to start from scratch',
            description: 'asdf.'
         }
      ]
   },
   {
      slug: 'designers',
      showIf: [{ stepSlug: 'design', choiceText: 'Need design help' }],
      heading: 'Designers',
      description: 'Who will provide the design?',
      nextSlug: 'content-storage',
      choices: [
         {
            text: 'Ben',
            description:
               "I'm better than bad at design, and including my design services in your project is probably less expensive than hiring a separate designer."
         },
         {
            text: 'Me',
            description: "I'll provide the designs to Ben."
         },
         {
            text: 'My designer',
            description: "I'll work with a designer to provide designs to Ben."
         },
         {
            text: "Ben's designer",
            description:
               'Ben has a couple of prefered designers. Ben will manage the relationship. We can select a designer based on the details of the project.'
         }
      ]
   }
];

const contentQs = [
   {
      slug: 'content-storage',
      heading: 'Content',
      description: 'Where will we store content?',
      nextSlug: 'content-editors',
      choices: [
         {
            text: 'In a custom CMS',
            description:
               'Store content in the same database as your app data. Manage the content with a CMS built by Ben.'
         },
         {
            text: 'In a hosted CMS',
            description:
               'Store content in a separate CMS like WordPress, Contentful, etc.',
            moreInfo: 'This is more info about the choice'
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
            moreInfo: 'This is more info about the choice'
         }
      ]
   },
   {
      slug: 'content-editors',
      showIf: [{ stepSlug: 'content-storage' }],
      heading: 'Content Editors',
      description: 'Who will update content?',
      nextSlug: 'page-count',
      choices: [
         {
            text: 'Me',
            description: "I'll manage my content myself."
         },
         {
            text: 'Ben',
            description:
               "Ben is a solid content author and editor. There are better content specialists available, but using Ben's skills may be more cost-effective."
         },
         {
            text: 'My content author',
            description: 'I have a content author who will manage content.'
         },
         {
            text: "Ben's content author",
            description:
               'Ben has a few prefered authors. Ben will manage the relationship. We can select an author based on the details of the project.'
         },
         {
            text: 'Multiple authors',
            description: 'Some combination of the above.'
         }
      ]
   }
];

const pageQs = [
   {
      slug: 'page-count',
      heading: 'Pages',
      description: 'Approximately how many pages will your website have?',
      nextSlug: 'image-count',
      choices: [
         {
            text: '1-9',
            description: 'asdf.'
         },
         {
            text: '10-49',
            description: 'asdf.'
         },
         {
            text: '50-100',
            description: 'asdf.'
         },
         {
            text: 'More',
            description: 'asdf.'
         }
      ]
   }
];

const imageQs = [
   {
      slug: 'image-count',
      heading: 'Images',
      description: 'How many images will your website have?',
      nextSlug: 'image-types',
      choices: [
         {
            text: 'None',
            description: 'asdf.',
            nextSlug: 'data-storage'
         },
         {
            text: '1-9',
            description: 'asdf.'
         },
         {
            text: '10-49',
            description: 'asdf.'
         },
         {
            text: '50-100',
            description: 'asdf.'
         },
         {
            text: 'More',
            description: 'asdf.'
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
      nextSlug: 'image-optimization',
      choices: [
         {
            text: 'Photos',
            description: 'asdf.'
         },
         {
            text: 'Icons',
            description: 'asdf.'
         },
         {
            text: 'Illustrations',
            description: 'asdf.'
         },
         {
            text: 'Logos',
            description: 'asdf.'
         },
         {
            text: 'Other',
            description: 'asdf.'
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
      description: 'Will you need to optimize images?',
      nextSlug: 'image-storage',
      choices: [
         {
            text: 'Yes',
            description: 'asdf.'
         },
         {
            text: 'No',
            description: 'asdf.'
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
      nextSlug: 'data-storage',
      choices: [
         {
            text: 'In my app',
            description: 'asdf.'
         },
         {
            text: 'In a CDN',
            description: 'asdf.'
         },
         {
            text: 'In a cloud storage service',
            description: 'asdf.'
         }
      ]
   }
];

const dataQs = [
   {
      slug: 'data-storage',
      heading: 'Data',
      description: 'Will you need to store data?',
      nextSlug: 'caching',
      choices: [
         {
            text: 'No database',
            description:
               "I don't need to store data. I just need a simple website. My content and data will be managed within the website itself."
         },
         {
            text: 'Need to store data',
            description:
               'I need to store data related to my app or website. This could be user data, info about your products and services, etc.',
            nextSlug: 'db-type'
         }
      ]
   },
   {
      slug: 'db-type',
      showIf: [{ stepSlug: 'data-storage', choiceText: 'Need to store data' }],
      heading: 'Database Type',
      description: 'This is step 3',
      nextSlug: 'db-access',
      choices: [
         {
            text: 'Relational Database',
            description:
               'SQL databases like MySQL, PostgreSQL, etc. These are good for structured data.'
         },
         {
            text: 'NoSQL Database',
            description: 'MongoDB, Cassandra, etc. These are good for unstructured data.'
         }
      ]
   },
   {
      slug: 'db-access',
      showIf: [{ stepSlug: 'data-storage', choiceText: 'Need to store data' }],
      heading: 'Database Access',
      description: 'Will users need to be able to add, edit, or delete data?',
      nextSlug: 'caching',
      choices: [
         {
            text: 'No user access',
            description:
               'My app will pull data from the database, but users will not be able to add, edit, or delete data.'
         },
         {
            text: 'User access',
            description: 'Users will be able to add, edit, or delete data.'
         }
      ]
   }
];

const cachingQs = [
   {
      slug: 'caching',
      heading: 'Caching',
      description: 'Will you need to cache data?',
      nextSlug: 'caching-location',
      choices: [
         {
            text: 'Yes',
            description: 'asdf.'
         },
         {
            text: 'No',
            description: 'asdf.'
         }
      ]
   },
   {
      slug: 'caching-location',
      showIf: [{ stepSlug: 'caching', choiceText: 'Yes' }],
      heading: 'Caching Location',
      description: 'Where should we cache data?',
      nextSlug: 'user-accounts',
      choices: [
         {
            text: 'CDN',
            description: 'asdf.'
         },
         {
            text: 'Server-side',
            description: 'asdf.'
         },
         {
            text: 'Client-side',
            description: 'asdf.'
         },
         {
            text: 'Combination',
            description: 'asdf.'
         }
      ]
   }
];

const userQs = [
   {
      slug: 'user-accounts',
      heading: 'Users',
      description: 'Will users need to sign up and log in?',
      nextSlug: 'user-roles',
      choices: [
         {
            text: 'Yes',
            description: 'asdf.'
         },
         {
            text: 'No',
            description: 'asdf.'
         }
      ]
   },
   {
      slug: 'user-roles',
      showIf: [{ stepSlug: 'user-accounts', choiceText: 'Yes' }],
      heading: 'User Roles',
      description:
         'Will there be different user roles? Read-only users, editors, admins, etc.',
      nextSlug: 'protected-pages',
      choices: [
         {
            text: 'Yes',
            description: 'asdf.'
         },
         {
            text: 'Np',
            description: 'asdf.'
         }
      ]
   },
   {
      slug: 'protected-pages',
      showIf: [{ stepSlug: 'user-accounts', choiceText: 'Yes' }],
      heading: 'Protected Pages',
      description: 'Will some pages only be availble for authenticated users?',
      nextSlug: 'contact',
      choices: [
         {
            text: 'Yes',
            description: 'asdf.'
         },
         {
            text: 'Np',
            description: 'asdf.'
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
            type: 'textarea'
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
