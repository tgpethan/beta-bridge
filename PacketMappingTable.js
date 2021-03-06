/*
	========- PacketMappingTable.js -=======
	  Created by Holly (tgpethan) (c) 2021
	  Licenced under MIT
	========================================
*/

const Packet0KeepAlive = require("./Packets/Packet0KeepAlive.js"),
	  Packet3Chat = require("./Packets/Packet3Chat.js"),
	  Packet4TimeUpdate = require("./Packets/Packet4TimeUpdate.js"),
	  Packet8UpdateHealth = require("./Packets/Packet8UpdateHealth.js"),
	  Packet6SpawnPosition = require("./Packets/Packet6SpawnPosition.js"),
	  Packet13PlayerPositionAndLook = require("./Packets/Packet13PlayerPositionAndLook.js"),
	  Packet53BlockChange = require("./Packets/Packet53BlockChange.js"),
	  Packet54BlockAction = require("./Packets/Packet54BlockAction.js"),
	  Packet130UpdateSign = require("./Packets/Packet130UpdateSign.js"),
	  Packet254ServerListPing = require("./Packets/Packet254ServerListPing.js"),
	  Packet255Kick = require("./Packets/Packet255Kick.js");

const mappingTable = {
	0x00: Packet0KeepAlive,
	/*0x01: Packet1LoginRequest,
	0x02: Packet2Handshake,*/
	0x03: Packet3Chat,
	0x04: Packet4TimeUpdate,
	0x06: Packet6SpawnPosition,
	0x08: Packet8UpdateHealth,
	/*0x0A: Packet10Player,*/
	0x0D: Packet13PlayerPositionAndLook,
	/*0x12: Packet18Animation,
	0x14: Packet20NamedEntitySpawn,
	0x20: Packet32EntityLook,
	0x22: Packet34EntityTeleport,
	0x32: Packet50PreChunk,*/
	0x35: Packet53BlockChange,
	0x36: Packet54BlockAction,
	/*0x67: Packet103SetSlot,*/
	0x82: Packet130UpdateSign,
	0xFE: Packet254ServerListPing,
	0xFF: Packet255Kick
};

module.exports = mappingTable;