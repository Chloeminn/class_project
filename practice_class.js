import {ImCalendar} from './ImCalendar.js';

/* 실행 */
let defaultCal = new ImCalendar();
defaultCal.startDraw({
    target : 'defaultCal'
});

let myCalendar = new ImCalendar();
myCalendar.startDraw({
    target : 'myCalendar'
    ,HL_today : true
});

let test = new ImCalendar();
test.startDraw({
    target : 'test'
    ,prevNext : false
    ,HL_today : true
});

let test2 = new ImCalendar();
test2.startDraw({
    target : 'test2'
    ,prevNext : false
});
