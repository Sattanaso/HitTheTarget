module.exports = (db) => {
	const schema = new db.Schema({
		
	});

	const Blog = new db.Model('blogs', schema);

	return Blog;
}