import next from 'next';

export const steps = [
   {
      slug: 'start',
      heading: 'What kind of project?',
      description: 'Do you need a website, app, or something in between?',
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
               'Users will interact with the app, click buttons, fill out forms, etc.'
         },
         {
            text: 'Hybrid',
            description:
               'A website with some pages that have dynamic content and user interaction'
         },
         {
            text: 'Not sure',
            description: "I'm not sure what I need. I need help figuring it out."
         }
      ]
   },
   {
      slug: 'data-storage',
      heading: 'Data Storage',
      description: 'This is step 2',
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
         {
            text: 'Not sure',
            description: "I'm not sure what I need. I need help figuring it out."
         }
      ]
   },
   {
      slug: 'db-type',
      heading: 'Database Type',
      description: 'This is step 3',
      nextSlug: 'db-access',
      choices: [
         {
            text: 'Relational Database',
            description: 'SQL databases like MySQL, PostgreSQL, etc.'
         },
         {
            text: 'NoSQL Database',
            description: 'MongoDB, Cassandra, etc.'
         },
         {
            text: 'Not sure',
            description: "I'm not sure what I need. I need help figuring it out."
         }
      ]
   },
   {
      slug: 'db-access',
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
         {
            text: 'Not sure',
            description: "I'm not sure what I need. I need help figuring it out."
         }
      ]
   },
   {
      slug: 'contact',
      heading: 'Contact Info',
      description: 'Let\'s connect!',
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
