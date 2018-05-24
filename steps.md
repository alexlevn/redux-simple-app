
Steps
    1. Create the application: 
        - mkdir redux-app
        - npm init -y
        - cd redux-app
    
    2. npm i webpack --save-dev
    
    3. npm i express --save
    
    4. npm i --save babel-core babel-loader babel-preset-es2015 babel-preset-stage-1 babel-preset-react

    5. npm i redux --save

    6. Create the files:
        - touch server.js
        - touch webpack.config.js
        - mkdir public
        - mkdir src
        - public/index.html
        - src/app.js
        
    7. Follow the videos
    
    Note: When you get bug with webpack.config.js file, fix with:
    - "replace loaders: [..] with rules: [..] " (google)

    8. ... 

    ... If Get bugs with webpack-cli, try these commands:
    npm uninstall -g webpack webpack-cli
    npm install -g webpack webpack-cli
    webpack

    9. npm i --save-dev redux-logger

## Section 3:
    1. Backup the package.json file to bk.package.json
    2. npm install express-generator -g
    3. express
        'y' for update the package.json
    4. npm install // to install new express pagekage.
    5. copy some parts from bk.package.json to package.json