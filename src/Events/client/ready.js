const { client } = require('discord.js');
const mongoose = require('mongoose');
const { Database } = process.env;
module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log('The client is now ready!');
		client.user.setActivity(`hello`);

		if (!Database) return;
		mongoose
			.connect(Database, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
			.then(() => {
				console.log('this client is now connected to the database!');
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
