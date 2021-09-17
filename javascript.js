$(document).ready(function () {// this will stop moment() not being defined.

    $(".time-block>textarea").on('blur', function(event){
        console.log('blurrrr');
        //  save logic here
        var timeBlock = $(this).parent();
        saveNote(timeBlock);

    });

    function saveNote(blockHourElement){
        var text = $(blockHourElement).children('.description').val();
        var time = $(blockHourElement).attr('id');
        //savs above in local
        console.log('time', time)
        localStorage.setItem(time, text);
    }
    
    //show time
    setInterval(function(){
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    //listener for save button
    $(".saveBtn").on("click", function () {

        console.log(this);
        var hourBlock = $(this).parent();
        
        saveNote(hourBlock);
        // old code note required
        // var text = $(this).siblings(".description").val();
        // var time = $(this).parent().attr("id");
        
    })

    //load saved data from Local.
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function trackerHour() {
        //get hour you are in.
        var currentHour = moment().hour();
        // loop over all the time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)
            //chang class as per current time, set past, present, or future
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    trackerHour();
})
