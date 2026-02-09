import express from "express"

const app = express();

const PORT = process.env.PORT ?? 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Hello From Server PORT"
    })
});

app.listen(PORT, () => {
    console.log(`Server running on this url: http://localhost:${PORT}`)
});