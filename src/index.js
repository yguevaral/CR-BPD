const app = require('./app.js');

app.listen(app.get('port'), (err) => {
    if ( err ) throw new Error(err);

    console.log('Server is running on port ', app.get('port'))

});
