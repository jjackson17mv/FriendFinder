var friendsArray = require('../data/friends.js');

module.exports = function(app) {

    app.get("/api/tables",function(req,res) {
        res.json(tableData)
    });

    app.get("/api/waitlist", function(req, res) {
        res.json(waitListData);
      });
}