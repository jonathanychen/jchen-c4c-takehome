# About

Hi! I'm Jonathan, and this is my take-home assessment for the C4C developer position. 

## Overview

At its core, this project revolves around a simple websocket in the frontend and a websocket server in the backend. When the send button is pressed while there is a valid message in the form input, the message is sent through the websocket to the server. The server then broadcasts it to all connected websockets, resulting in real-time appearance of messages on the boards of all connected users. 

Features:

- Send messages in real-time to a board.
- Messages limited to those which are at least 1 character and at most 128 characters long.
- Multiple users/windows can see messages being sent at the same time.
- EXTRA: If there are already messages on the board, a new window will backfill them for the new session in their original order. 

# Quick Start

1. Clone this repository.
2. Navigate to `jchen-c4c-takehome/frontend` and run `npm i` and then `npm start`
3. Navigate to `jchen-c4c-takehome/backend` and run `npm i` and then `npm start`
4. Visit the page at `localhost:3000`