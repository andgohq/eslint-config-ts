import PrettierConfig from '@andgohq/prettier-config';

// eslint-disable-next-line @typescript-eslint/naming-convention
let PascalCase = 'test';

const NAME = 'test';

class Main {
  hello(name: string) {
    return `Hello ${name}`;
  }
  hello2() {}
}

class Main2 {}

const main = () => {
  const f1 = (s: string) => !!s;
  const f2 = () => {};

  f1('');
  f2();

  new Main2();

  if (f1('')) {
    console.log('');
  }

  const arr = [1, 2, 3];

  arr.map((ele) => {
    if (ele) {
      return true;
    } else {
      return false;
    }
  });

  const main = new Main();
  const CONST_VARIABLE_WITH__userId = 1;

  console.log(CONST_VARIABLE_WITH__userId);
  console.log(main.hello(NAME));

  console.log(PrettierConfig);

  PascalCase = 'a';
  console.log(PascalCase);
};

main();
