# Episode - 3 Notes

1. Using npm scripts to run and build the project .

- npm run start === npm start
- npm run build

2. What is a React Element?

- It is not a HTML DOM Elements
- React.createElement() => Creates a Object
- React Element => Render to DOM => HTML Elements .
- React DOM => Renders the react Elements => Replaces elements present in the root with react Elements .

3. What is JSX ?

- JavaScript Syntax that makes easier to create react elements .
- React can be written without the jsx .
- Makes Deveeloper Life easy .
- convention where we merge the HTML and JS together in a single file .
- Not HTML in Javascript , it is like HTML syntax but not html exactly .
- Jsx code => transpiled to React.createElement() =>
  -JSX is React.createElement() .
- Babel Transpiles our JSX code and converts to React.createElement() .
  - Single VS Multiple Lines
  1. Wrap Multiple brackets inside the round brackets .
- JSX Also takes care of all injection attacks like Cross Site Scripting .
- Whenever js is covered by curly Brackets like { JS } jsx performs the Data Sanitization .

4. What is Babel ?

- Compiles jsx to React.createElement() ;
- Babel Does a lot of transpilation .
- transpiles es6 to older version of javascript if es6 is not compatable with current verision of Browser .

5. What is a React Component ?

- On Webpage Header , Searchbar , cards and footer is component .
- Class Based Components (old way of Writing code ) and Functional Components(New Way to write components) .
- Legacy react applications use class based components .
  - Component Composition
    1. Nesting Components inside a react component .

## HomeWork

1. Find out varius Tags of JSX , and how to write them .
