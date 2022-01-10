console.log("Enter Num Subject");
let stdin3 = process.openStdin();
stdin3.addListener("data", function (str3) {
  let nummajor = parseInt(str3);
  for (i = 0; i < nummajor; i++) {
    if (i === i) {
      console.log("subject" + (i + 1));
      let stdin4 = process.openStdin();
      stdin4.addListener("data", function (str4) {
        console.log(str4);
        stdin4.destroy();
      });
    }
    if (i === (nummajor-1)) {
      console.log("END");
    }
  }
});