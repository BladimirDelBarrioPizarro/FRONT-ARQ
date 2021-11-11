module.exports = function(plop) {
    plop.addHelper('prepareName', function(name) {
      const regex = /^([A-Za-z_]*)$/i
      if (!regex.test(name))
        throw `Nombre incorrecto ${name}, se admiten letras [a-z][A-Z] y guión bajo (_)`
  
      return name
    })
  
    // create your generators here
    plop.setGenerator('component', {
      description: 'Component scaffolding',
      prompts: [
        {
          type: 'input',
          name: 'componentName',
          message: 'Component name?'
        },
        {
          type: 'list',
          name: 'componentType',
          message: 'Component type?',
          choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages']
        }
      ], // array of inquirer prompts
      actions: [
        {
          type: 'add',
          path:
            'src/components/{{componentType}}/{{prepareName componentName}}/{{prepareName componentName}}.tsx',
          templateFile: 'component-templates/Component.txt'
        },
        {
          type: 'add',
          path:
            'src/components/{{componentType}}/{{prepareName componentName}}/{{prepareName componentName}}.test.tsx',
          templateFile: 'component-templates/Component.test.txt'
        },
        {
          type: 'add',
          path: 'src/stories/{{prepareName componentName}}.story.tsx',
          templateFile: 'component-templates/Component.story.txt'
        }
      ] // array of actions
    })
  }