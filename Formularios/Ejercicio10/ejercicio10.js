var getEventTime = function () {
    var start = moment(document.getElementById("start").value);
    var end = moment(document.getElementById("end").value);
    console.log(moment.duration(end.diff(start)).asDays());
}