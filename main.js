document.getElementById('start-button').addEventListener('click', () => {
  const resultElement = document.getElementById('result');
  if (!window.EyeDropper) {
    resultElement.textContent =
    'Your browser does not support the EyeDropper API';
    return;
  }
  
  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();
  
  eyeDropper
  .open({ signal: abortController.signal })
  .then((result) => {
    resultElement.textContent = result.sRGBHex;
    resultElement.style.backgroundColor = result.sRGBHex;
    // console.log(resultElement.textContent);
    // f e d c b a 9 8 7 6 5 4 3 2 1 
    if (resultElement.textContent[1] <= 5 ){
      // console.log(resultElement.textContent[1]);
      document.getElementById("result").style.color = "white";
    }
      //   // console.log(color[1]);
    // };
     
  })
  .then(() => {//custom written code to copy to clipboard
    const copyText = resultElement.textContent;
    navigator.clipboard.writeText(copyText);
  })
  .catch((e) => {
    resultElement.textContent = e;
  });
  
    setTimeout(() => {
        abortController.abort();
      }, 60000);// will time out after 1 min;
  });
