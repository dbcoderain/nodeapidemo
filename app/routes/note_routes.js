const fs = require('fs');
const logFile = 'data.json';

module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        fs.readFile(logFile, (err, data) => {
            if (err) {
                res.json('error reading log file');
            }
            try
            {
                const json = JSON.parse(data);
                json.push(req.body);
                console.log(req.body);
                fs.writeFile(logFile, JSON.stringify(json));
            }  
            catch(err)
            {
                res.json('error writing to file, ensure valid json provided');
            }        
            res.status(200).json({'success': true});
        })
    });
    app.get('/notes', (req, res) => {
        fs.readFile(logFile, 'utf8', (err, data) => {
            if (err) {
                res.send('error reading log file');
            }
            res.json(JSON.parse(data));
        });
    });
    app.get('/clear', (req, res) => {
        fs.writeFile(logFile, '[]');
        res.json('json data has been cleared');
    });
};