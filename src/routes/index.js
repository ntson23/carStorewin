const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');


function route(app){

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);

     
    //   app.get('/news', (req, res) => {
    //     res.render('news')
    //   });
      
    
}

module.exports = route;