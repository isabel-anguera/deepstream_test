/* global shared, say */

const map_actions = [];
for (let i = 0; i < 128; i++) {
  map_actions[i] = [];
}

map_actions[4][6] = "I'm a computer!";
map_actions[4][9] = () => say(5, 9, "I'm an empty table!");
map_actions[21][42] = () => (shared.lightsOn = !shared.lightsOn);

map_actions[44][11] = "Broken"; // vending machine 1
map_actions[45][11] = "Also broken"; // vending machine 2
map_actions[47][10] = ""; // Pizza box in kitchen

map_actions[54][10] = "Cool stuff IP"; // laser cutter 1
map_actions[62][7] = "bzz"; //  laser cutter 2
map_actions[62][10] = "Crazy work incoming"; // 3d printer

map_actions[7][20] = "wait time: 20?"; // elevator 1
map_actions[7][23] = "*Distant beep*"; // elevator 2
map_actions[7][26] = "…"; // elevator 3

map_actions[32][27] = "perfect for a nap"; // couch
map_actions[38][28] = "sharing is caring"; // Materials Closet
map_actions[52][28] = "*eyes flicker*"; // samurai robot   *made a copy with different eye color*
map_actions[44][31] = "*LED blinks*";

//or if possible, plays music sample;
map_actions[37][16] = "dun dun dun"; // piano
map_actions[26][15] = "DT Community Locker"; // Locker

map_actions[57][19] = "*Permanent marker*"; // whiteboard drawing 1204B
map_actions[43][20] = "?"; // AV computer in 1204A
map_actions[51][19] = "?"; // Projector screen

map_actions[41][32] = "Look! I dug up 1000 bells!"; // Nintendo switch in main area
map_actions[73][13] = "Another animal Crossing reference"; // Switch in classroom
map_actions[72][21] = "A wild Rattata appeared!"; // Switch 2 in classroom
map_actions[71][22] = "Checkmate"; // Chessboard
map_actions[71][16] = "beep boop"; // game boy thing

map_actions[65][16] =
  "Games, Design and Play: A Detailed Approach to Iterative Game Design"; // Bookshelf
map_actions[53][16] = "Minecraft reference"; // Computer near making center

map_actions[8][32] = "Just left"; // person waiting for 4th elevator
map_actions[73][28] = "Welcome to game club!"; // Game club member  (wrong classroom but can change)
map_actions[55][13] = "D12 Making center rules!"; // Making center tech
map_actions[47][40] = "Need help?"; // DT Study Tutor
map_actions[72][5] = ""; // Justin
