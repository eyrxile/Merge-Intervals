var merge = function(intervals) {
    if(!intervals || intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currentInterval = intervals[0];

    for(let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        if(nextInterval[0] <= currentInterval[1]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            mergedIntervals.push(currentInterval);
            currentInterval = nextInterval;
        }
    }
    mergedIntervals.push(currentInterval);

    return mergedIntervals;
};

//Example usage:
const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals1));

const intervals2 = [[1,4], [4,5]];
console.log(merge(intervals2));