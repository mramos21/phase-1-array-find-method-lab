// code your solution here
function superbowlWin(array) {
    if (array.find(array => array.result === 'W')) {
        let win = array.find(array => array.result === 'W')
        return win.year
    }
}