
        function valid1()
        {
        
        
        if(document.f1.name.value=="")
        {
        alert("Enter Name");
        document.f1.name.focus();
        }
        else
        if(document.f1.number.value=="")
        {
        alert("Enter Mobile number");
        document.f1.number.focus();
        }	
        else
        if(document.f1.email.value=="")
        {
        alert("Enter email");
        document.f1.number.focus();
        }
    }
        function check()
        {
        
        if(isNaN(document.getElementById("number").value)==true)
        {
        alert("Only Numbers are valid !!!");
}
        }
       
       