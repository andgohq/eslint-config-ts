import PrettierConfig from '@andgohq/prettier-config';

// eslint-disable-next-line @typescript-eslint/naming-convention
let PascalCase = 'test';

const NAME = 'test';

class Main {
  hello(name: string) {
    return `Hello ${name}`;
  }
}

const main = () => {
  const main = new Main();

  console.log(main.hello(NAME));

  console.log(PrettierConfig);

  PascalCase = 'a';
  console.log(PascalCase);
};

main();
