const { readdirSync } = require("fs");
const Ascii = require("ascii-table");
const buttontable = new Ascii("Buttons Loaded");
const menutable = new Ascii("Menus loaded");
const modaltable = new Ascii("Modals loaded");

module.exports = (client) => {
  client.HandleComponents = async () => {
    const componentsFolders = readdirSync(`./src/components`);

    for (const folder of componentsFolders) {
      const componentFiles = readdirSync(`./src/components/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      const { buttons, SelectMenus, modals } = client;

      switch (folder) {
        case "buttons":
          for (const file of componentFiles) {
            const button = require(`../../components/${folder}/${file}`);
            buttons.set(button.data.name, button);
            await buttontable.addRow(button.data.name, "✔ SUCCESFUL");
          }
          break;

        case "SelectMenus":
          for (const file of componentFiles) {
            const menu = require(`../../components/${folder}/${file}`);
            SelectMenus.set(menu.data.name, menu);
            await menutable.addRow(menu.data.name, "✔ SUCCESFUL");
          }
          break;

        case "modals":
          for (const file of componentFiles) {
            const modal = require(`../../components/${folder}/${file}`);
            modals.set(modal.data.name, modal);
            await modaltable.addRow(modal.data.name, "✔ SUCCESFUL");
          }

        default:
          break;
      }
    }
    console.log(buttontable.toString());
    console.log(menutable.toString());
    // console.log(modaltable.toString());
  };
};
