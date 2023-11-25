window.addEventListener('load',function (){

    let element=document.querySelector("#prescriptionBtn")
    console.log(element)
    element.addEventListener('click',function(){
        let fileRef=document.getElementById("prescription");
        let filetype=/text.*/;
        console.log(fileRef.files[0].type);
        if(fileRef.files[0].type.match(filetype))
        {
            console.log("file type matching");
            //create reader object
            var reader=new FileReader();
            reader.onload=function(evt)
            {
                console.log(reader.result);
            };
            //read the content
            reader.readAsText(fileRef.files[0]);

        }

    })


})
