const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
mainWindow = new BrowserWindow({width: 220, height: 220, minWidth:220, minHeight:220, maxWidth: 880, maxHeight: 880})
mainWindow.setTitle("Simple Calc")
mainWindow.setMenuBarVisibility(false)
// mainWindow.setAspectRatio(16/9)
mainWindow.loadURL(
isDev
? "http://localhost:3000"
: `file://${path.join(__dirname, "../build/index.html")}`
);
mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
if (process.platform !== "darwin") {
app.quit();
}
});
app.on("activate", () => {
if (mainWindow === null) {
createWindow();
}
});