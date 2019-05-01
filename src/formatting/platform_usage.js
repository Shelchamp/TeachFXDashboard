// This function formats the data so to pass into PieChart
// to see platform usage
export const lookAtPlatform = function(recordings) {
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