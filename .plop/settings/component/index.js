module.exports = {
  description: 'Creates a new component',
  prompts: [
    // {
    //   type: 'list',
    //   name: 'componentType',
    //   message: 'What component do you want to create?',
    //   choices: ['page', 'component'],
    // },
    // {
    //   type: 'input',
    //   name: 'other',
    //   message: 'còn gì khác không',
    //   when: function (answers) {
    //     return answers.componentType === 'page';
    //   },
    // },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name?',
    },
  ],
  actions: function (data) {
    let actions = []

      // Tùy theo giá trị của componentType, Plop sẽ tạo file với phần mở rộng tương ứng
      // if (data.componentType === 'page') {
      //   actions.push({
      //     type: 'add',
      //     path: '../src/app/{{camelCase name}}/page.tsx',
      //     templateFile: 'templates/component/index.ts.hbs',
      //   });
      // } else if (data.componentType === 'component') {
      actions.push(
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/component/index.ts.hbs',
        },
        // component
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component/component.tsx.hbs',
        },
        //Css
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.module.scss',
          templateFile: 'templates/component/scss.hbs',
        },
      );
    // }

    return actions;
  },
};
