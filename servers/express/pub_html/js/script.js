// When page first loaded up, make a ajax call to perform a HTTP request
$(document).ready(function() {
    console.log("call GET users-api")
    $.ajax({
        method:'get',
        url: '/users-api',
        data: '',
        // call printUsers() when request status is success
        success: printUsers
    })
})

function printUsers(data) {
    // empty the 'ul' element in body tag
    $('body>ul').empty()
    // loops through each user object in "data" array
    // For each user, append <li> to the <ul> element in body tag
    $.each(data, function() {
        $('<li>').html(this.pid + " -> " + this.fname + " " + this.lname + "<span> &times;</span>")
        .appendTo('body>ul')
    })

    // add click event listener to the <span> element for deleting user
    $('span').off('click').click(function() {
        var name = $(this).parent().text().split(" ")
        console.log(name)

        $.ajax({
            method:'delete',
            url: '/users-api/' + name[0],
            data: '',
            success: printUsers
        })
    })
}

function adduser() {
    console.log("call POST users-api")
    $.ajax({
        method:'post',
        url: '/users-api',
        data: 'pid=' + $('#pid').val() + 
              '&fname=' + $('#fname').val() + 
              '&lname=' + $('#lname').val(),
              success: printUsers
    })    
}