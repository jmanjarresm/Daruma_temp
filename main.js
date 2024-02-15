// Contenido de main.js
import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

document.addEventListener("DOMContentLoaded", function() {
    Chatbot.init({
        chatflowid: "c0a91228-db22-48c8-a3f6-433e9f9c62e1",
        apiHost: "https://flowiseai-railway-production-19bf.up.railway.app",
        container: "#chatbot-container"
    });
});