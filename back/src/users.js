// списки будуть перенесені в бд 21.04
const users = [];
const rooms = [];

function changefilm(room, film) {
    const roomindex = rooms.findIndex((curroom) => curroom.id === room);
    if (roomindex !== -1) {
        rooms.splice(roomindex, 1);
    }
    rooms.push({ id: room, film: film });
}

function getFilm(room) {
    return rooms.find((curroom) => curroom.id === room);
}
// Join user to chat
function userJoin(id, username, room) {
    const user = { id, username, room };

    users.push(user);

    return user;
}

// Get current user
function getCurrentUser(id) {
    return users.find((user) => user.id === id);
}

// User leaves chat
function userLeave(id) {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getRoomUsers(room) {
    return users.filter((user) => user.room === room);
}

module.exports = {
    getFilm,
    changefilm,
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
};
