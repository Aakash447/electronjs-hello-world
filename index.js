const electron = require("electron");
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
var mainWindow;
app.on("ready", function () {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    backgroundColor: "#2e2c29",
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "test.html"),
      protocol: "file",
      slashes: true,
    })
  );
});
