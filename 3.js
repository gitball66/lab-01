console.log('Enter Number')
let stdin3=process.openStdin()
        stdin3.addListener("data", function (str3){
            let ans= parseInt(str3)*parseInt(str3);
            console.log('Anser='+ ans.toString().trim())
        stdin3.destroy() 
});
