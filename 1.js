console.log('Enter Number Multiplication table')
let stdin3=process.openStdin()
        stdin3.addListener("data", function (str3){
            let ans= parseInt(str3)
            let ary=[12]
            for(i=1;i<=12;i++){
                ary[i]=ans*i
            }
            for(j=1;j<=12;j++){
                console.log(j + '*' + ans + '=' + ary[j].toString().trim())
            }

        stdin3.destroy() 
});