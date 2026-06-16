import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express Server!');
});

app.listen(port, () => {
    console.log(`Express server is running at http://localhost:${port}`);
})