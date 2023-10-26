$(document).ready(function($){
    $('#form').validate({
        rules:{
            name:"required",
            city:"required",
            gender:"required"
        },
        messages:{
            name:"Please enter your Nmae",
            city:"please enter your city",
            gender:"this feild is required"
        },
        errorPlacement:function(error,element){
            if(element.is("radio")){
                error.appendTo(element.parents('.form-group'));
            }
            else{
                error.insertAfter(element);

            }
        },
           submitHandler:function(form){
            form.submit();
           }



    });

});