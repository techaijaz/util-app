$(document).ready(function(){
    var base_url = 'http://localhost:3000/';
    $("#saveTodo").click(()=>{
        if($("#inputTodo").val()!=""){
            $.ajax({
                type: "POST",
                url: "saveTodo",
                data:{
                    body : $("#inputTodo").val(),
                    isDone : false
                },
                success: function(msg){
                   window.location.reload();
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                   console.log(errorThrown);
                }
            });
        }
    });

    $(".todochkbox").click(()=>{
        $(".todochkbox:checked").each(function(){
            $.ajax({
                type: "POST",
                url: "updateTodo",
                data:{
                    index : $(this).val()
                },
                success: function(msg){
                    window.location.reload();
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
                }
            });
        });
    })
})