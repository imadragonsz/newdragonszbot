const fs = require('fs');
const Ascii = require('ascii-table');
const table = new Ascii('events Loaded');

module.exports = (client) => {
	client.HandleEvents = async () => {
		const eventFolders = fs.readdirSync(`./src/events`);
		for (const folder of eventFolders) {
			const eventFiles = fs.readdirSync(`./src/Events/${folder}`).filter((file) => file.endsWith('.js'));

			switch (folder) {
				case 'client':
					for (const file of eventFiles) {
						const event = require(`../../Events/${folder}/${file}`);
						if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
						else client.on(event.name, (...args) => event.execute(...args, client));
						await table.addRow(event.name, '✔ SUCCESFUL');
					}
					break;

				default:
					break;
			}
		}

		console.log(table.toString());
	};
};
