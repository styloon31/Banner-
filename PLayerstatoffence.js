// script.js

document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);
document.getElementById('bgImage').addEventListener('change', handleBackgroundImage);

let cellValue = '';
let backgroundImageLoaded = false;
let customArray = [];
let customArray1 = [];
let mvp = '';
let hitrate = '';
let mvp1 = '';
let hitrate1 = '';
let TeamName1 ='';
let TeamName2 = '';
let matchFormat = '';

document.getElementById('loadButton').addEventListener('click', () => {
  if (backgroundImageLoaded) {
    displayOnCanvas();
  } else {
    alert('Please load content and select a background image first.');
  }
});

document.getElementById('showButton').addEventListener('click', () => {
  if (backgroundImageLoaded) {
    displayOnCanvas();
  } else {
    alert('Please select a background image first.');
  }
});

function handleXLSXFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const cellAddresses = ['B2', 'B3', 'B4'];
    mvp = firstSheet['B5'].v;
    hitrate = firstSheet['B6'].v;
    const cellAddresses1 = ['C2', 'C3', 'C4'];
    mvp1 = firstSheet['C5'].v;
    hitrate1 = firstSheet['C6'].v;
    TeamName1 = firstSheet['B1'].v;
    TeamName2 = firstSheet['C1'].v;
    matchFormat = firstSheet['A1'].v
    let playerTag = firstSheet['A11'].v; //player tag stored

   

    for (const address of cellAddresses) {
      if (firstSheet[address]) {
        customArray.push(firstSheet[address].v);
      }
    }
    for (const address of cellAddresses1) {
      if (firstSheet[address]) {
        customArray1.push(firstSheet[address].v);
      }
    }
  };

  reader.readAsArrayBuffer(file);
}

function handleBackgroundImage(event) {
  const bgImage = document.getElementById('bg-image');
  bgImage.src = URL.createObjectURL(event.target.files[0]);
  bgImage.onload = () => {
    backgroundImageLoaded = true;
  };
}

function displayOnCanvas() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let bgImage = document.getElementById('bg-image');
  canvas.width = 1920
  canvas.height = 1080

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  // Define a maximum width for the mvp text
  let maxWidth = 200; // Adjust this as needed

  // Function to fit text within a maximum width and adjust font size
  function fitTextWithinWidth(text, maxWidth) {
    let fontSize = 30; // Initial font size
    ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
    let width = ctx.measureText(text).width;

    // Decrease font size until the text fits within maxWidth
    while (width > maxWidth && fontSize > 10) {
      fontSize--; // Decrease font size
      ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
      width = ctx.measureText(text).width;
    }

    return fontSize;
  }

  // Get the optimal font size for mvp text
  let fontSize = fitTextWithinWidth(mvp, maxWidth);

  // Display the mvp text with the optimal font size
  ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx.fillText(mvp, 760, 540);
  
  let x=810
  const startY = 98; // Adjust the starting Y position as needed
  const lineHeight = 152; // Adjust the line height as needed
  ctx.font = '40px "Bebas Neue", sans-serif';
  for (let i = 0; i < customArray.length; i++) {
    const value = customArray[i];
    const y = startY + i * lineHeight;
    ctx.fillText(value, x, y);
    x = x - 10 
  }
  ctx.fillText(hitrate, 800, 680);

  // Get the optimal font size for mvp1 text
  fontSize = fitTextWithinWidth(mvp1, maxWidth);

  // Display the mvp1 text with the optimal font size
  ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx.fillText(mvp1, 1040, 540);
  x = 1070
  ctx.font = '40px "Bebas Neue", sans-serif';
  for (let i = 0; i < customArray1.length; i++) {
    const value = customArray1[i];
    const y = startY + i * lineHeight;
    ctx.fillText(value, x, y);
    x = x - 5 
  }
  ctx.fillText(hitrate1, 1080, 680);

  maxWidth = 600

  function fitTextWithinWidth1(text, maxWidth) {
    let fontSize = 50; // Initial font size
    ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
    let width = ctx.measureText(text).width;

    // Decrease font size until the text fits within maxWidth
    while (width > maxWidth && fontSize > 10) {
      fontSize--; // Decrease font size
      ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
      width = ctx.measureText(text).width;
    }

    return fontSize;
  }

  fontSize = fitTextWithinWidth1(TeamName1, maxWidth);
  ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx.fillText(TeamName1,185,690);
  fontSize = fitTextWithinWidth1(TeamName2, maxWidth);
  ctx.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx.fillText(TeamName2,1435,690);
  ctx.font = '55px "Bebas Neue", sans-serif'
  ctx.fillText(matchFormat,1600 ,870)
}

document.getElementById('downloadButton1').addEventListener('click', () => {
  const canvas1 = document.getElementById('canvas');
  const downloadLink1 = document.createElement('a');
  downloadLink1.href = canvas1.toDataURL();
  downloadLink1.download = 'canvas1.png';
  downloadLink1.click();
});

