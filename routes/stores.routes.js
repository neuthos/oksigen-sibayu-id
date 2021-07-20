module.exports = (app) => {
    const store = require('../controllers/store');

    app.get('/store', store.getAll)
    app.post("/store", store.create)
}