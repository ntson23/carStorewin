const Course = require('./models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');

class MeController {
    
    // [GET] /me/stored/courses -> biến động nhận nhiều giá trị trong mục news
    storedCourses(req, res, next){
        Course.find({})
        .then(courses => res.render('me/stored-courses',{
            courses: multipleMongooseToObject(courses)
        }))
        .catch(next);

    }

}

module.exports = new MeController;

