module.exports = {
	data: {
		name: `fav-color`
	},
	async execute(interaction, client) {
		const favoriteColor = interaction.fields.getTextInputValue('favColorInput');
		await interaction.reply({
			content: `you said your favourite color is: ${favoriteColor}}`
		});
		console.log(favoriteColor);
	}
};
