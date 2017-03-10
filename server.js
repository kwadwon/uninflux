var restify = require('restify');

var server = restify.createServer({
    name: 'uninfluxapp',
    version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', function (req, res, next) {
    res.send("This hackathon is going to be awesome!");
    return next();
});

server.listen(8080, function () {
    console.log('%s server listening at %s', server.name, server.url);
});