// import react 

// add some states
//const [color,setColor] = useState();

chrome.action.onClicked.addListener((tab) => {
  console.log('action.js is inside');
  // Your function here, for example:
  console.log("Icon clicked!");
});

// const eyeDropper = new EyeDropper();
// const abortController = new AbortController();
  
//   eyeDropper
//   .open({ signal: abortController.signal })
//   .then((result) => {
//     resultElement.textContent = result.sRGBHex;
//     resultElement.style.backgroundColor = result.sRGBHex;

// })
// .then(() => {//custom written code to copy to clipboard
//   const copyText = resultElement.textContent;
//   navigator.clipboard.writeText(copyText);
// })
// .catch((e) => {
//   resultElement.textContent = e;
// });

//   setTimeout(() => {
//       abortController.abort();
//     }, 60000);// will time out after 1 min;


console.log('action.js outside');
// chrome.tabs.executeScript(null, {code:"document.body.bgColor='red'"});

