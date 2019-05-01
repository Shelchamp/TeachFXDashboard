
// This function will format the data to pass into the PieChart component
// to show talk %.

export const lookAtTalkPerc = function(recording) {

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