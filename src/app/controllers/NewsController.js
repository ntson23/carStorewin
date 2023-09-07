
class NewsController {
    
    // [GET] /news
    index(req, res){
        res.render('news');
    }

    // [GET] /news/:slug -> biến động nhận nhiều giá trị trong mục news
    show(req, res){
        res.send('news details');
    }

}

module.exports = new NewsController;

