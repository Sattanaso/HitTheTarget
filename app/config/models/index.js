module.exports = (connectionString) => {
	const db = require('mongojs-models')(connectionString);

	return {
		blogModel: require('./blog.model')(db),
		tagModel: require('./tag.model')(db),
		newsModel: require('./news.model')(db),
		userModel: require('./user.model')(db),
	}
}