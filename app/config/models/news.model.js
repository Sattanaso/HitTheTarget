module.exports = (db) => {
	const schema = new db.Schema({
		
	});

	const News = new db.Model('news', schema);

	return News;
}