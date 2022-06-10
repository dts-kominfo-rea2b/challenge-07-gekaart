const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi)=>{
  let total = 0;
  return new Promise((resolve, reject)=>{
    if(promiseTheaterIXX == "" || promiseTheaterVGC == ""){
      reject("data not found!")
    }else{
      promiseTheaterIXX()
      .then((hasilSetelahMenonton)=>{
        hasilSetelahMenonton.forEach((e) => {
          if(e.hasil === emosi){
            total += 1;
          }
        });
      })
      promiseTheaterVGC()
      .then((hasilSetelahMenonton)=>{
        hasilSetelahMenonton.forEach((e)=>{
          if(e.hasil === emosi){
            total +=1;
          }
        })
        resolve(total)
      }

      )
    }
  })
}

module.exports = {
  promiseOutput,
};
