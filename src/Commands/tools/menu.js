const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('menu').setDescription('shows a menu'),
	async execute(interaction, client) {
		const menu = new SelectMenuBuilder()
			.setCustomId('sub-menu')
			.setMinValues(1)
			.setMaxValues(1)
			.setPlaceholder('choose a link')
			.setOptions(
				new SelectMenuOptionBuilder({
					label: `youtube`,
					value: `https://youtube.com`
				}),
				new SelectMenuOptionBuilder({
					label: `google`,
					value: `https://www.google.com`
				})
			);
		await interaction.reply({
			components: [ new ActionRowBuilder().addComponents(menu) ]
		});
	}
};
