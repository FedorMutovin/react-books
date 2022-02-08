require("@babel/register")();

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <title>Book app</title>
        </head>
        <body>
            <div id="root">${render()}</div>
        </body>
    </html>

    `)
})

app.listen(3000, () => console.log('server on 3000'))
const render = require('./render').default;
