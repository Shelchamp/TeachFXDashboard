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

export const lookAtStudentTalkTrendAll = function(recordings){
    // We need to sort the data
    let data = recordings.map(recording => {
        return {
            date : new Date(Date.parse(recording.startDateTime)), // Needs to be formatted in milliseconds for the component
            num : recording.studentTalk
        }
    })
    return data.sort((a, b) => a.date.getTime() - b.date.getTime());
    // return data;
}

export const studentTalkTrendByYear = function(recordings, year){
    // Filter dates by year
    let data = recordings.filter(date => date.startDateTime.slice(0, 4) === String(year))

    // Format data for our component
    data = data.map(recording => {
        return {
            date: new Date(Date.parse(recording.startDateTime)), // Needs to be formatted in milliseconds for the component
            num: recording.studentTalk
        }
    })

    // Sort the data
    return data.sort((a, b) => a.date.getTime() - b.date.getTime());
}

export const studentTalkAverageByMonth = function(recordings, year){
    
    // Filter by year
    let data = recordings.filter(date => date.startDateTime.slice(0, 4) === String(year));
    
    // Format data by month
    let months = {};
    data.forEach(date =>{
        let month = Number(date.startDateTime.slice(5, 7));

        if (months[month] === undefined) {
            months[month] = {
                totalPercent : 0,
                count : 0
            };
        }
        months[month].count++;
        months[month].totalPercent += date.studentTalk;
    })
    // Find the averages
    let averagedData = Object.keys(months).map(key =>{
        return {
            month : key,
            num : Math.round(months[key].totalPercent / months[key].count),//Calculate average
            year : year
        }
    })
    return averagedData;


}