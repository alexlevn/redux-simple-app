
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

    6. Install mongodb
    7. mkdir .../mongodb/dbs
    8. Run mongod from bin folder:
        ./mongod --dbpath ~/Application/mongodb/dbs
    9. Install Robomongo

        ps -ax: view all the process

    10. MongoDB Query sample:
        db.books.find({
            'price': {$gt: 21}
        })
        ... CRUD
    
    11. npm i --save mongoose
        
        npm i nodemon -g
        npm i --save-dev nodemon
        // nodemon => không cần phải restart server nữa (?) đỡ mất thời gian (khác webpack -w như thế nào ?)

    12: NOTE: post in Advanced REST Client App.
        The example of JSon Obj:
        {
            "title":" tieu de sach ",
            "description": "mo ta sach", 
            "price": 456
        }

        use symble ". do not use this symbl '

    13: npm i --save axios redux-thunk

    14: call to api functions

    15: Set up a Reverse Proxy
        - duplicate the app.js file to one file: apiServer.js
        - change some code...
        - npm i --save http-proxy
        