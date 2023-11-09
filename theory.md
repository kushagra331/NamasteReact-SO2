Q. what is hash ?

Q. what is integrity ?
The integrity attribute allows a browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated.
    <script src="https://www.srihash.org/" 
    integrity="sha384-p3GoQ0Uyzd34tqiaoSkxv/uo+vG5h6CkSSQ49nJznnCEUXayHOplgjr/og6W7sj7" crossorigin="anonymous"></script>

* Read about dif bundlers: vite, webpack, parcel

* Read about Script types in html (MDN Docs)

Q.1 What is `NPM`?
npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
npm consists of three distinct components:
    the website
    the Command Line Interface (CLI)
    the registry
*npm is used to manage our packages. Why do we use npm bcoz we want lot a package in our 
project becoz our react app can not build by just injecting the react into our project
we need a lot of helper packages those helper packages comes with npm 
It Does not stand for node package manager there is no official name of npm.

Q.6 What is Tree Shaking?
Tree shaking is a technique used to remove dead code when bundling multiple JavaScript files into single files. 
Tree shaking removes dead code by the help of the import and export statement to 
detect if code module are exported and imported for use in between the JS files.
Tree shaking will also reduce the code size. It uses minifier.

Q.10 What is the difference between `package.json` and `package-lock.json` ?
package.json is a file which is gernerated while intalling the npm. I contains the meta data related to the project.
this file used to give the information to npm about the project and about its dependencies.
I will contains version of the project with ^ and ~, which describes about the package versions along with with accessblity 
for the minor and patch update accessblity.
where as package-lock.josn is same as package.json but it will be more detailed and has the exact version of the packages that are been used
this file will make sure the same version of the packages installed over the different enviroments,by locking the versions of the 
dependecies.

Q.11 Why should I not modify `package-lock.json`?
We should never modify package-lock.json, because package-lock.json is only file which keep track of the exact versioning of the packages that are been used in our project, altering the meta data may causes inconsistacies over the different enviroments.

Q.14 What is `browserlists` ?
browserlists is javascript package which is used for allowing an application to run on a specified browsers with a specified verion. 

Before pushing project in Production we need to do few things
	minify
	optimization
	bundle(bundlers)
	removing console.log();
	caching

Q.2 What is `Parcel/Webpack`? Why do we need it?
A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. 
Ex : vite , parcel , webpack

Why do we need it?
The module bundlers keep track of the both our source files dependencies and 3rd party dependencies. this dependancy greph guaraentees that all sources and associated code files are kept uptodate and error free.

In the original create-react-app the bundler that they use is webpack.
we will be using parcel(module bundler) becoz it is easy to set / use / build.

Q. What is Parcel ? 
Pracel > it is a package. package is kind of module of JS file. parcel(module bundler) is easy to set/use/build.if we want to use a package in our code then we hv to use package manager

if i want to want npm in my app then i will use 
'npm init' means npm initialize 
'npm init -y' this will skip a lot of options

test commmond : jest **

To init our app will use parcel(how we will configure parcel in our app?)

we use npm install to install anything in our app
npm install parcel [npm install --save-dev parcel(it is same thing])

but we don't want parcel to be in Production we want only in our local(developer) machine
npm install -D parcel

-D means dev dependency(we are installing parcel as a dev dependency)
Dependency means all the packages that our project need and parcel is one of our dependency

what if i dont write -D while installing parcel ***

Dependency means my project depends on packages why we need packages we need a lot functionality for that i need packages those packages will be installed using 'npm install -D parcel' now parcel comes as dev dependency bcoz i needed in my dev enviroment.

Q.5 What is difference between `dependencies` vs `devDependencies` ? 
dependencies : A dependency is a library that a project needs to function effectively. 
If a package doesn’t already exist in the node_modules directory, then it is automatically added.
command : npm install --save
Ex : React, Express, Axios
DevDependencies : are the packages a developer needs during development.
As you install a package, npm will automatically install the dev dependencies.
command : npm install --save-dev
Ex : ESLint, Mocha

Q.16 Read about: ^ - caret and ~ - tilda
caret and tilder in package.json
it is the way for us to tell which version we were shld be using. it is for minor and major version of parcel
^it is for minor version of parcel(auto upgrade)
~it is for major version of parcel(auto upgrade)

Q. what is package-lock.json ?
We hv parcel as dev dependency we use caret that means if the version goes form 2.8.2 to 2.8.3 so the package-lock.json will lock the version & will keep it safe.

Important things abt package-lock.json 
1. package-lock.json is very imp file it locks the version
2. Never keep (package-lock.json) in gitingnore
3. package-lock.json maintains the exact version and keeps a track
4. maintains # of it as well

node_modules > whenever u install somthing it gets installed into node_modules. It is a like databse of npm

Q. How parcel will minify our code ?
Parcel will use a minifier.

Q.12 What is `node_modules` ? Is it a good idea to push that on git?
node_modules is the directory where the dependancies and modules that are used in our project are placed. when we install any package it will be downloaded from the web and comes and sits inside the node_modules.
No, it is very heavy why we don't push it in git bcoz our package-lock.json has sufficient info to re-generate at the production end, using npm install cmd.

Q. why it is not a good way to write react in our HTML CODE ?
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
bcoz we need to react in our server so that it runs faster else we we need to import that will take time 

Q. Right way to install react ? 
npm install react
npm install react-dom

Q.4 What is `npx` ?
npx is a command to execute npm packages.
Below line means execute parcel and give entry point 'index.html'.

#To ignite our app
npx parcel index.html

never change node_modules & package.json

Q.3 What is `.parcel-cache` ?
.pracel-cache > To do minification
.cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode

Q.13 What is the `dist` folder?
Dist folder is generated by bundler. It is a distribution folder that contains minified version of our project including the compiled modules, to be used in prod.
This creates fasterdevelopment build version of the project and host it on the server.

Q. How to tell parcel to make production build ?
npx parcel build index.html
It will push this build to dist folder

images take time 

Q.7 What is Hot Module Replacement?
HPR = HOT Module Replacement > this means parcel will keep a track which all ur files
updating (hv live server)
this is an algorithm which does the live updates of the code changes on the web app without the need of a full refresh.
HRM works by watching the files (file watcher algorithm), if any files changes in the project it will automatically updates the browser.
this allows for quicker development times.

Q.8 List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
Parcel Does
	Created A Server
	HPR = HOT Module Replacement
	Parcel uses File watcher algorithm  - it is written in C++
	Bundling 
	Minify 
	cleaning our code
	Manages Dev and Production build
	Super Fast build algorithm
	Image optimization
	Caching while development
	Compression
	Compatible with older version of browser
	Enable HTTPS on dev(npx parcel index.html --https)
	Manges port number
	Consistent hashing algorithm : to do buidling
	Zero Config

Q.9 What is `.gitignore`? What should we add and not add into it?
.gitignore is a text file which let us add filename and foldername which has to be ignored by the git, if we add a file name in .gitignore that file will not be tracked by git.
Anything which we can generate on server can be put inside .gitignore
For example, We won't add node_modules in the github repo as we can generate it using package.json and package-lock.json in the server.

We have our package manager which handles & takes care of transitive dependencies of our code.

Transitive Dependencies > when we are building a production ready app we need to lot of thing building,caching..etc we can't do this alone we need some dependencies on them when we need dependencies so those dependencies are also dependent on somthing else. 

Q. What is ^ - caret and ~ - tilda?
Tilda('~') - It is used to match most recent patch version. It freezes major and minor version. As we know patch updates are bug fixes, so this notation allows us automatically accepts bug fixes. 
    ~1.2.0 = this means it will update to 1.2.x.

Caret('^') - It is used for automatically updating the minor updates along with the patch updates.
    ^1.2.0 = this means it will update to 1.x.x.

