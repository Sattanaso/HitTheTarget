module.exports = () => {
	class ObjectModel {
		constructor() { }

		create(titleUrl, imageUrl, content, author, tags) {
			return {
				title: titleUrl,
				image: imageUrl,
				content: content,
				links: [],
				author: author,
				tags: tags,
				date: new Date(),
				likes: 0,
				views: 0,
				shares: 0,
				bookmarks: 0
			}
		}
	}

	const objectModel = new ObjectModel();
	return objectModel;
}