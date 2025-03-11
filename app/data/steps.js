const notSure = {
   text: 'Not sure',
   description: "I'm not sure what I need. Let's figure this out together."
};

const writeOwn = {
   text: 'Write my own',
   description: "I'll write my own answer"
};

const commonChoices = [writeOwn, notSure];

// todo: moreInfo that shows if you click a question mark icon

export const steps = [
   {
      slug: 'start',
      heading: 'What kind of project?',
      description: 'Do you need a website, an app, or a mix of both?',
      nextSlug: 'data-storage',
      choices: [
         {
            text: 'Static Website',
            description:
               "Pages with static content that doesn't change. No user interaction."
         },
         {
            text: 'App',
            description:
               'Users will interact with the app, click buttons, fill out forms, save things, etc.'
         },
         {
            text: 'Hybrid',
            description:
               'A website with some pages that have dynamic content and user interaction'
         },
         ...commonChoices
      ]
   },
   {
      slug: 'data-storage',
      heading: 'Data Storage',
      description: 'Will you need to store data?',
      nextSlug: 'contact',
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
         },
         ...commonChoices
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
         },
         ...commonChoices
      ]
   },
   {
      slug: 'db-access',
      showIf: { stepSlug: 'data-storage', choiceText: 'Need to store data' },
      heading: 'Database Access',
      description: 'Will users need to be able to add, edit, or delete data?',
      nextSlug: 'contact',
      choices: [
         {
            text: 'No user access',
            description:
               'My app will pull data from the database, but users will not be able to add, edit, or delete data.'
         },
         {
            text: 'User access',
            description: 'Users will be able to add, edit, or delete data.'
         },
         ...commonChoices
      ]
   },
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
   },
   {
      slug: 'end',
      heading: 'Sweet',
      description: "Thanks! I'll be in touch."
   }
];
