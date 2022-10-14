const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	data: new SlashCommandBuilder().setName('genshintest').setDescription('genshin test command'),
	async execute(interaction, client) {
		const embed = new EmbedBuilder().setTitle('genshintest').setColor(0x11111).addFields([
			{
				name: 'artiact sets',
				value: `${genshindb.artifacts('5', { matchCategories: true }).join('\n')}`
			}
		]);

		interaction.reply({
			embeds: [ embed ]
		});
	}
};
