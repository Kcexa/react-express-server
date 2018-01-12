const   mongoose = require('mongoose'),
    History = mongoose.model('History');


// All

exports.listWholeHistory = (req, res) => {
    History.find({}, (err, item) => {
        if (err) res.send(err);
        res.json(item);
    });
};

exports.addToHistory = (req, res) => {
    let newItem = new History(req.body);
    newItem.save((err, item) => {
        if (err) res.send(err);
        res.json(item);
    });
};


// Particular item

exports.readHistoryItem = (req, res) => {
    History.findById(req.params.itemId, (err, item) => {
        if (err) res.send(err);
        res.json(item);
    });
};

exports.updateHistoryItem = (req, res) => {
    History.findOneAndUpdate(
        {
            _id : req.params.itemId
        },
        req.body,
        {
            new : true
        },
        (err, item) => {
            if (err) res.send(err);
            res.json(item);
        }
    );
};

exports.deleteHistoryItem = (req, res) => {
    History.remove({
        _id : req.params.itemId
    }, (err, item) => {
        if (err) res.send(err);
        res.json({
            message: 'Item was successfully deleted'
        });
    });
};