module.exports = (db) => {
	const schema = new db.Schema({
		name: String
	});

	const Tag = new db.Model('tags', schema);

	return Tag;
}
