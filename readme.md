# Build API with express js

1. Create a new project by running the following command in the terminal

```bash
npm init -y
```

2. Install express js and other dependecies by running the following command in the terminal

```bash
npm install express body-parser mysql express-validator dotenv --save
npm install nodemon --save-dev
```

3. configure mysql database in `config/db.js` file

```javascript
const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Koneksi Berhasil!');
  }
});
```

4. make a structural directory

```
your root project
│   README.md
│   index.js
│   package.json
└───controllers
│   │   exampleController.js
│   └   // your others controller file
└───models
│   │   exampleModel.js
│   └   // your others model file
└───routes
│   │   exampleRoute.js
│   └   // your others route file
└───config
│   │   exampleConfig.js
│   └   // your others configuration file
└───utils
    └───validators
        │   exampleValidator.js
        └   // your others validation file
```

5. write your code
6. run your code
