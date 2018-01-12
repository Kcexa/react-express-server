module.exports = (app) => {

    let history = require('../controllers/history');

    app.route('/history')
        .get(history.listWholeHistory)
        .post(history.addToHistory);

    app.route('/history/:itemId')
        .get(history.readHistoryItem)
        .put(history.updateHistoryItem)
        .delete(history.deleteHistoryItem);
};
