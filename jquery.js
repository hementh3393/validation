$(document).ready(function(){
    $('#signupform').validate({
        rules:{
        fname:{
            required:true,
            minlength:4,
            maxlength:9
        },
        sname:{
            required:true,
            minlength:4
        },
        email:{
            required:true,
            email:true
        },
        pass:{
            required:true,
            minlength:5
        },
        day:{
            required:true
        },
        gender:{
            required:true
        }

    },
    messages:{
        fname:{
        required:"enter 1st name",
        minlength:"enter atleast 4 char"
        }
    }
    
    })
})