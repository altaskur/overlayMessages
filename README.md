
<img src="https://img.shields.io/github/license/altaskur/overlayMessages?style=for-the-badge">
<img src="https://img.shields.io/github/languages/top/altaskur/overlayMessages?style=for-the-badge">

# Overlay Messages

## Definición

Es un proyecto para practicar con el protocolo [SSE](https://github.com/altaskur/Apuntes/blob/main/Backend/sse.md), el proyecto se encarga de capturar a través de un bot, los mensajes en tiempo real de un canal de Twitch y mandarlos al cliente. Para ello hacemos uso del protocolo SSE y las librerías de backend de TMI.js, para chat IRC y para el servidor Express.js.

## Variables de entorno

* *TWITCH_OAUTH_TOKEN*

  Token necesario para conectarnos a través de TMI.js, se puede conseguir a través de [Token Generator](https://twitchapps.com/tmi/).

* *BOT_USERNAME*

    Nombre del bot que se encargará de mostrar en caso de querer que este interactue con el chat.

* *CHANNEL_NAME*

    Nombre del canal al cual queremos conectarnos.

## Ejecución

Si queremos ejecutarlo de manera única usaremos el comando

```bash
npm run start
```

Si queremos ejecutarlo en modo monitor de cambios

```bash
npm run dev
```

## ✨ Agradecimientos

---

@girlazo @gtrabanco @welner @byppepe