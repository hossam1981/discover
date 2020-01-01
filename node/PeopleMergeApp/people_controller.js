const fs = require('fs');

var data1,data2,fullData,rawData;

let promise = new Promise(function(res,rej){
  fs.readFile('./people1.json','utf-8',function(err,data){
    // console.log(data);
    data1 = JSON.parse(data);
    res(data1);
  });
}).then(x=>{
  fs.readFile('./people2.json','utf-8',function(err,data){
    data2 = JSON.parse(data);
    fullData = [...data1,...data2];
    // console.log(fullData);
  });
}).catch(x=>{
  console.log(x);
});

let promise2 = new Promise(function(res,rej){

  let check = setInterval(function(){
    if (fullData) {
      clearInterval(check);
      let sort = fullData.sort();
      fs.writeFile('./peopleComplete.txt',sort,'ascii', err=>{
        if (err) throw err;
        console.log('file is writen');
      });

      fs.writeFile('./peopleComplete.json',fullData, err=>{
        if (err) throw err;
        console.log('json is written');
      });

    }

    console.log(fullData);
    console.log('second');
  },1000);

})