import { makeWASocket, useMultiFileAuthState } from '@whiskeysockets/baileys';
import pino from 'pino';

async function startTestClient() {
    console.log("Initializing WhatsApp Baileys test client...");

    // Uses multi-file local authentication state for session storage
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    const sock = makeWASocket({
        auth: state,
        logger: pino({ level: 'silent' }), // Suppresses console clutter
        printQRInTerminal: true
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection } = update;
        if (connection === 'open') {
            console.log("✅ Successfully connected to WhatsApp WebSocket servers!");
        } else if (connection === 'close') {
            console.log("⚠️ Connection closed. Reconnecting...");
        }
    });
}

startTestClient();
