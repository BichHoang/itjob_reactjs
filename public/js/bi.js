$(document).ready(function () {
    $('#timelineContent').css("display", "none");
    $('[data-toggle="offcanvas"]').click(function () {
        $("#navigation").toggleClass("hidden-xs");
    });
    $('#aboutTab').click(
        function () {
            $('#aboutContent').css("display", "block");
            $('#timelineContent').css("display", "none");
            $('#skillContent').css("display", "none");
            $('#saveContent').css("display", "none");
        });
    $('#timelineTab').click(
        function () {
            $('#aboutContent').css("display", "none");
            $('#timelineContent').css("display", "block");
            $('#skillContent').css("display", "none");
            $('#saveContent').css("display", "none");
        });
    $('#skillTab').click(
        function () {
            $('#timelineContent').css("display", "none");
            $('#aboutContent').css("display", "none");
            $('#skillContent').css("display", "block");
            $('#saveContent').css("display", "none");
        });   
    $('#saveTab').click(
        function () {
            $('#timelineContent').css("display", "none");
            $('#aboutContent').css("display", "none");
            $('#skillContent').css("display", "none");
            $('#saveContent').css("display", "block");
        }); 
    document.getElementById('divNameEdit').style.display = 'none'; 
    $('#btnEditName').click(
        function () {
            document.getElementById('divName').style.display = 'none'; 
            document.getElementById('divNameEdit').style.display = 'block'; 
        }
    ); 
    $('#btnCancelName').click(
        function () {
            document.getElementById('divName').style.display = 'block'; 
            document.getElementById('divNameEdit').style.display = 'none'; 
        }
    ); 
    document.getElementById('divEmailEdit').style.display = 'none'; 
    $('#btnEditEmail').click(
        function () {
            document.getElementById('divEmail').style.display = 'none'; 
            document.getElementById('divEmailEdit').style.display = 'block'; 
        }
    ); 
    $('#btnCancelEmail').click(
        function () {
            document.getElementById('divEmail').style.display = 'block'; 
            document.getElementById('divEmailEdit').style.display = 'none'; 
        }
    ); 
    $('#btnAddReview').click(
        function () {
            document.getElementById('divReviews').style.display = 'block'; 
        }
    ); 
    
});
 