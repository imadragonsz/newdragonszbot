const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('modal').setDescription('returns a modal'),
	async execute(interaction, client) {
		const modal = new ModalBuilder().setCustomId(`fav-color`).setTitle(`fav color?`);

		const textinput = new TextInputBuilder()
			.setCustomId('favColorInput')
			.setLabel('what is your favorite color?')
			.setRequired(true)
			.setStyle(TextInputStyle.Short);

		modal.addComponents(new ActionRowBuilder().addComponents(textinput));

		await interaction.showModal(modal);
	}
};
