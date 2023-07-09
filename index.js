import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.send("Working");
})
app.get('/backend', (req, res) => {
    res.send("Hello from Backend");
})

app.listen(8080, () => {
    console.log("Server is running on PORT 8080");
})