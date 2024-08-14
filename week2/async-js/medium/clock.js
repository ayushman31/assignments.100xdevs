function clock() {
    setInterval(() => {
      let time = new Date();
      let sec = time.getSeconds();
      let hr = time.getHours();
      let min = time.getMinutes();
      console.log(hr,":",min,":",sec, hr<12?"AM":"PM");
    }, 1000);
  }
  
clock();  