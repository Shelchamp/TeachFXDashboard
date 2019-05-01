// The Shape of the objects passed into our components:
    // { 
    //     label : "string",
    //     num : "integer"
    // }


    // PIECHART - PLATFORM USAGE - Show % of usage Mobile vs Web
export const lookAtPlatform = function (recordings) {
    let counter = {};
    let total = 0;
    let data = [];
    recordings.forEach(recording => {
        let platform = recording.platform;
        if (counter[platform] === undefined) {
            counter[platform] = 0;
        }
        counter[platform]++;
        total++;
    });
    // At this point we have a number for each platform. Now find distrubtion. Return an array with
    // a label for each plaform and their corresponding %

    Object.keys(counter).forEach(key => {
        data.push({

            label: key.slice(0, 1).toUpperCase() + key.slice(1), // Capitalize labels
            num: Math.round((counter[key] / total) * 100)

        })

    })

    return data;
}

// PIECHART - TALK % - Show talk % between Teacher, Student, Group, Silence
export const lookAtTalkPerc = function (recording) {

    return [
        {
            label: "Student",
            num: recording.studentTalk
        },
        {
            label: "Teacher",
            num: recording.teacherTalk
        },
        {
            label: "Group",
            num: recording.groupTalk
        },
        {
            label: "Silence",
            num: recording.silence
        }
    ];
}

// COLUMNCHART - RECORDINGS BY ROLE - Show which roles have the most recordings

export const lookAtRoleRec = function(recordings) {

}

// COLUMNCHART - USERS BY ROLE
export const lookAtUsersRole = function (users) {
    let total = 0;
    let counter = {};
    let data = [];
    users.forEach(user => {
        let subject = user.role ? user.role : "Not listed";
        if (counter[subject] === undefined) {
            counter[subject] = 0;
        }
        counter[subject]++;
        total++;
    });
    Object.keys(counter).forEach(key => {
        data.push({
            label: key,
            num: counter[key]
        })
    })

    return {data : data, totalUsers : total}
}

// COLUMNCHART - USERS BY SUBJECT
export const lookAtUsersSubj = function(users) {
    let total = 0;
    let counter = {};
    let data = [];
    users.forEach(user =>{
        let subject = user.subjectTaught ? user.subjectTaught : "None";
        if (counter[subject] === undefined) {
            counter[subject] = 0;
        }
        counter[subject]++;
        total++;
    });
    Object.keys(counter).forEach(key =>{
        data.push({
            label : key,
            num : counter[key]
        })
    })

    return {data : data, totalUsers : total}
}