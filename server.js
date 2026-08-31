const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <title>منصة القدس Launchpad</title>
        <style>
            body { font-family: Tahoma, sans-serif; background: #0f172a; color: #fff; text-align: center; padding: 50px; }
            .card { background: #1e293b; padding: 30px; border-radius: 12px; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
            h1 { color: #38bdf8; }
            p { color: #94a3b8; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>منصة القدس للعملات الرقمية</h1>
            <p>السيرفر يعمل بنجاح تام ومتصل بالبنية السحابية!</p>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
