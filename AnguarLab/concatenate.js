const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/<PROJECT_NAME>/runtime.js',
'./dist/<PROJECT_NAME>/polyfills.js',
'./dist/<PROJECT_NAME>/scripts.js',
'./dist/<PROJECT_NAME>/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/analytics-counter.js');
await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()

/*

Creates a new sub-folder elements inside the project folder
The JS files runtime.js, polyfills.js, scripts.js and main.js are concatenated into a new file analytics-counter.js inside the elements folder
styles.css from the production build is copied to the elements folder
Files from the assets folder are copied to the elements folder
*/

/*
You need to install fs-extra and concat from npm using:

npm install fs-extra concat --save-dev

Now let's add a script to package.json:

{
"scripts": {
...
"build:elements": "ng build --prod --output-hashing none && node concatenate.js"
},
}
}


You can run the script using:


 
npm run build:elements

<!doctype html>
<html lang="en">
<head>
<title>Angular Elements Demo</title>
</head>
<body>
<analytics-counter></analytics-counter>
<script src="analytics-counter.js"></script>
</body>
</html>
*/