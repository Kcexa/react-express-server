let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let HistorySchema = new Schema({
    url: {
        type: String,
        Required: 'Enter a URL'
    },
    title: {
        type: String,
        default: null
    },
    ref : {
        type: String,
        default: null
    },
    iFrames : [
        {
            url: String
        }
    ],
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('History', HistorySchema);