const top=require('../models/top_model')
const week=require('../models/week_model')

//get top data
exports.get_top_data = function (req, res) {
    top.find({}, function(err, data) { 
        if (err) {
            res.send('error')
        } else {
           data=JSON.parse(JSON.stringify(data));
           res.send(data);
        }
    });
};

//get week data
exports.get_week_data = function (req, res) {
    week.find({}, function(err, data) { 
        if (err) {
            res.send('error')
        } else {
           data=JSON.parse(JSON.stringify(data));
           res.send(data);
        }
    });
};
