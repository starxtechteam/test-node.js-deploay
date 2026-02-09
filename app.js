import express from "express"

const app = express();

const PORT = process.env.PORT ?? 5000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, from server test</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on this url: http://localhost:${PORT}`)
});