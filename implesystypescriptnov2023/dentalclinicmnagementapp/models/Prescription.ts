const fileRef=require('fs')
export class Prescription{

    write(info:string){
        fileRef.writeFile('medicine.txt', info,
            function(err) {
                if (err) {
                    return console.error(err);
                }

                console.log("Report generated successfully!");

            });

    }


}
