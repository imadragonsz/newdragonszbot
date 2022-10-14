module.exports = {
	data: {
		name: 'sub-menu'
	},
	async execute(interaction, client) {
		await interaction.reply({
			content: `you selected: ${interaction.values[0]}`
		});
	}
};
