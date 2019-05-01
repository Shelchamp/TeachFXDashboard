let users = require("./users.json");
let recordings = require("./recordings.json");

// Format the data to look like redux state



export const objData = { 
    users : {},
    recordings : {}
};

export const arrayData = {users: users, recordings: recordings}

formatUsers(users, objData);
formatRecordings(recordings, objData);


function formatUsers(users, state) {
    users.forEach(user =>{
        state.users[user.userId] = user;    
    })
}

function formatRecordings(recordings, state){
    recordings.forEach(recording =>{
        state.recordings[recording.recordingId] = recording;
    })
}