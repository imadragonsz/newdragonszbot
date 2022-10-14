const { Client, CommandInteraction, MessageEmbed, ModalSubmitFields } = require('discord.js');
const { InteractionType } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	/**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
	async execute(interaction, client) {
		if (interaction.isCommand()) {
			const command = client.commands.get(interaction.commandName);
			if (!command)
				return (
					interaction.reply({
						embeds: [
							new MessageEmbed().setColor('RED').setDescription('⛔ An error has occured while running this command.')
						],
						ephemeral: true
					}) && client.command.delete(interaction.commandName)
				);

			command.execute(interaction, client);
		} else if (interaction.isButton()) {
			const { buttons } = client;
			const { customId } = interaction;
			const button = buttons.get(customId);
			if (!button) return new Error('there is no code for this button');

			try {
				button.execute(interaction, client);
			} catch (err) {
				console.error(err);
			}
		} else if (interaction.isSelectMenu()) {
			const { SelectMenus } = client;
			const { customId } = interaction;
			const SelectMenu = SelectMenus.get(customId);
			if (!SelectMenu) return new Error('there is no code for this SelectMenu');

			try {
				SelectMenu.execute(interaction, client);
			} catch (err) {
				console.error(err);
			}
		} else if (interaction.InteractionType == InteractionType.ModalSubmit) {
			const { modals } = client;
			const { customId } = interaction;
			const modal = modals.get(customId);
			if (!modal) return new Error('there is no code for this Modal');

			try {
				modal.execute(interaction, client);
			} catch (err) {
				console.error(err);
			}
		}
	}
};
