module.exports = (express, mongo, nodemailer, params) => {
    const controllers = require('../api/service/controller')(mongo, nodemailer, params);
    return new express.Router()
		.post('/users', controllers.userCtrl.newUser)
		.put('/users', controllers.userCtrl.login)
		.put('/users/image', controllers.userCtrl.imageUpdate)
		.put('/users/change-password', controllers.userCtrl.changePassword)
		.put('/users/forgot-password', controllers.userCtrl.forgotPassword)
		.post('/users/contact-us', controllers.userCtrl.contactUs)

		.get('/blog', controllers.blogCtrl.blogs)
		.get('/blog/:id', controllers.blogCtrl.blogById)
		.put('/blog/:tag', controllers.blogCtrl.blogByTag)
		.post('/blog', controllers.blogCtrl.newBlog)
		.put('/blog/comment/:id', controllers.blogCtrl.commentsUpdate)
		.put('/blog/like/:id', controllers.blogCtrl.likeBlog)
		.put('/blog/bookmark/:id', (req, res, next) => { })

		.get('/games', controllers.gameCtrl.games)
		.get('/games/:id', controllers.gameCtrl.gameById)
		.put('/games/:tag', controllers.gameCtrl.gameByTag)
		.post('/games', controllers.gameCtrl.newGame)
		.put('/games/comment/:id', controllers.gameCtrl.commentsUpdate)
		.put('/games/like/:id', controllers.gameCtrl.likeGame)
		.put('/games/bookmark/:id', (req, res, next) => { })

		.get('/tags', controllers.userCtrl.tags)
}
