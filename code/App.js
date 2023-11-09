//if we need to import anything in this normal JS file
//we need to specify node='module' in HMTL work
import React from 'react';
import ReactDOM  from 'react-dom/client';

const heading1 = React.createElement(
  'h1',
  {id:'title'},
  "Chapter 01 - Inception"
);
const heading2 = React.createElement(
  'h3',
  {  },
  "Theory -"
);
const Tlist1 = React.createElement('li',{},"What is Emmet?");
const Tlist2 = React.createElement('li',{},"Difference between a Library and Framework?");
const Tlist3 = React.createElement('li',{},"What is CDN? Why do we use it?");
const Tlist4 = React.createElement('li',{},"Why is React known as React?");
const Tlist5 = React.createElement('li',{},"What is crossorigin in script tag?");
const Tlist6 = React.createElement('li',{},"What is diference between React and ReactDOM?");
const Tlist7 = React.createElement('li',{},"What is difference between react.development.js and react.production.js files via CDN?");
const Tlist8 = React.createElement('li',{},"What is async and defer? - see my Youtube video ;)");

const theory_ul = React.createElement(
  'ul',
  {id:'container'},
  [Tlist1,Tlist2,Tlist3,Tlist4,Tlist5,Tlist6,Tlist7,Tlist8]
);
const heading3 = React.createElement(
  'h3',
  {  },
  "Code -"
);
const Clist1 = React.createElement('li',{},"Set up all the tools in your laptop");
  const Clist2 = React.createElement('li',{},"VS Code");
  const Clist3 = React.createElement('li',{},"Chrome");
  const Clist4 = React.createElement('li',{},"Extensions of VS Code");
const Clist5 = React.createElement('li',{},"Create a new Git repo");
const Clist6 = React.createElement('li',{},"Build your first Hello World program using");
  const Clist7 = React.createElement('li',{},"Using just HTML");
  const Clist8 = React.createElement('li',{},"Using JS to manipulate the DOM");
  const Clist9 = React.createElement('li',{},"Using React");
      const Clist10 = React.createElement('li',{},"duplicate`1");
      const Clist11 = React.createElement('li',{},"duplicate`2");
      const Clist12 = React.createElement('li',{},"duplicate`3");
const Clist13 = React.createElement('li',{},"Push code to Github (Theory as well as code)");
const Clist14 = React.createElement('li',{},"Learn about Arrow Functions before the next class");

const ul2= React.createElement(
  'ul',
  {id:''},
  [Clist2,Clist3,Clist4]
);
const ul4= React.createElement(
  'ul',
  {id:''},
  [Clist10,Clist11,Clist12]
);
const ul3= React.createElement(
  'ul',
  {id:''},
  [Clist7,Clist8,Clist9,ul4]
);
const code_ul = React.createElement(
  'ul',
  {id:'container'},
  [Clist1,ul2,Clist5,Clist6,ul3,Clist13,Clist14]
);
const heading4 = React.createElement(
  'h3',
  {  },
  "References:"
);
const Clist15 = React.createElement('li',{},"https://beta.reactjs.org/apis/react/createElement");
const Clist16 = React.createElement('li',{},"https://www.youtube.com/watch?v=IrHmpdORLu8");


const ref_ul = React.createElement(
  'ul',
  {id:'container'},
  [Clist15,Clist16]
);
const container = React.createElement(
  'div',
  {id:'container'},
  [heading1, heading2,theory_ul,heading3,code_ul,heading4,ref_ul]
);
console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root

//async defer
root.render(container);


