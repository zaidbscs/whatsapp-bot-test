# WhatsApp Bot Test (Baileys / Node.js)

This is a lightweight background Node.js application built using the `@whiskeysockets/baileys` library to connect to the WhatsApp Multi-Device API via outbound WebSockets.

## Architecture & Resource Footprint
- **Runtime:** Node.js (v18 / v20)
- **Protocol:** Outbound HTTPS / WSS (Port 443)
- **Storage:** Local encrypted credential files stored within `auth_info_baileys/`.
- **Resource Usage:** Minimal CPU and memory usage; completely event-driven.

## Deployment Target
Designed to run via cPanel's **Setup Node.js App** environment manager on a persistent process supervisor.
