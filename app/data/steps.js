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
   nextSlug: 'data-storage',
   choices: [
      {
         text: 'Static Website',
         description:
            "Pages with static content that doesn't change. No user interaction.",
         moreInfo: 'Examples: Portfolio, landing page, blog... Usually focused on SEO, content and performance.'
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
            'Examples: Blog with comments, marketing site with forms and journeys...'
      }
   ]
};

const dataQs = [
   {
      slug: 'data-storage',
      heading: 'Data Storage',
      description: 'Will you need to store data?',
      nextSlug: 'content-storage',
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
      showIf: { stepSlug: 'data-storage', choiceText: 'Need to store data' },
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
      showIf: { stepSlug: 'data-storage', choiceText: 'Need to store data' },
      heading: 'Database Access',
      description: 'Will users need to be able to add, edit, or delete data?',
      nextSlug: 'content-storage',
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

const contentQs = [
   {
      slug: 'content-storage',
      heading: 'Content Storage',
      description: 'Where will we store content?',
      nextSlug: 'content-management',
      choices: [
         {
            text: 'In my database',
            description:
               'Store content in the same database as your app data. Manage the content with a CMS.'
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
      slug: 'content-management',
      //   showIf: { stepSlug: 'data-storage', choiceText: 'Need to store data' },
      heading: 'Content Management',
      description: 'Who will update content?',
      nextSlug: 'page-count',
      choices: [
         {
            text: 'Me',
            description: 'qwer.'
         },
         {
            text: 'You',
            description: 'qwer.'
         },
         {
            text: 'Other folks',
            description: 'qwer.'
         }
      ]
   }
];

const pageQs = [
   {
      slug: 'page-count',
      heading: 'How many pages?',
      description: 'How many pages will your website have?',
      nextSlug: 'contact',
      choices: [
         {
            text: '1-9',
            description: 'asdf.'
         },
         {
            text: '10-19',
            description: 'asdf.'
         },
         {
            text: '20-49',
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

const forms = [
   {
      slug: 'contact',
      heading: 'Contact Info',
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
   heading: 'Sweet',
   description: "Thanks! I'll be in touch."
};

const noMoreInfo =
   "I haven't written help content for this choice yet. We can figure it out together.";

const aggregatedSteps = [start, ...dataQs, ...contentQs, ...pageQs, ...forms, end];

export const steps = aggregatedSteps.map((step, index) => {
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
