const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const Ascii = require("ascii-table");
const table = new Ascii("commands Loaded");

module.exports = (client) => {
  client.HandleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/Commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/Commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../Commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        await table.addRow(command.data.name, "✔ SUCCESFULL");
      }
    }
    console.log(table.toString());

    const clientId = "1032321387337093191";
    const guildId = "857729547985879081";
    const rest = new REST({ version: "9" }).setToken(process.env.token);
    try {
      console.log("Started refreshing application (/ commands.)");

      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: client.commandArray,
      });

      console.log("successfully reloaded application (/) commands");
    } catch (error) {
      console.error(error);
    }
  };
};
