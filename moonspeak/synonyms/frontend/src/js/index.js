import "./custom_elements.js";
import {Elm} from "./elm-app.js";
import {initPitchZoom, moonspeakInstallOnMessageHandler, moonspeakPostMessage} from "./moonspeak.js";

const app = window.Elm.Main.init({
    node: document.getElementById("elmapp")
});

app.ports.sendMessage.subscribe(function(message) {
    moonspeakPostMessage(message);
});

function onMessage(event) {
    app.ports.messageReceiver.send(event.data);
}

moonspeakInstallOnMessageHandler(onMessage);
initPitchZoom();
