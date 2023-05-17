const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const newsData = require('./data/news.json')

app.use(cors());
app.get('/', (req, res) => {
    res.send('Dragon server running')
});
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(newsData)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(newsData)
    }
    const categoriwiseNews = newsData.filter(n => n.category_id === id);
    res.send(categoriwiseNews)
})
app.get('/:id/newsdetails', (req, res) => {
    const id = req.params.id;
    const idNews = newsData.find(n => n._id === id);
    res.send(idNews);
})
app.listen(port, () => {
    console.log('your server is running in 5000 port')
})

