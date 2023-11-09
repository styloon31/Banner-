document.getElementById('bgImage2').addEventListener('change', handleBackgroundImage2);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage2Loaded = false;
let customArray2 = []
let customArray3 = []
let hitrate2 = ''
let hitrate3 = ''
let TeamName3 = ''
let TeamName4 = ''

document.getElementById('showOnSecondCanvas').addEventListener('click', () => {
  if (backgroundImage2Loaded) {
    displayOnCanvas2();
  } else {
    alert('Please select a background image for the second canvas first.');
  }
});

function handleBackgroundImage2(event) {
  const bgImage2 = document.getElementById('bg-image2');
  bgImage2.src = URL.createObjectURL(event.target.files[0]);
  bgImage2.onload = () => {
    backgroundImage2Loaded = true;
  };
}

function handleXLSXFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      cellValue = firstSheet['F2'].v; // Assuming you want data from cell A1
      const cellAddresses3 = ['F2', 'F3', 'F4'];
      mvp = firstSheet['F5'].v;
      hitrate2 = firstSheet['F6'].v;
      const cellAddresses4 = ['G2', 'G3', 'G4'];
      mvp1 = firstSheet['G5'].v;
      hitrate3 = firstSheet['G6'].v;
      TeamName3 = firstSheet['F1'].v;
      TeamName4 = firstSheet['G1'].v;
      matchFormat = firstSheet['A1'].v
  
      for (const address of cellAddresses3) {
        if (firstSheet[address]) {
          customArray2.push(firstSheet[address].v);
        }
      }
      for (const address of cellAddresses4) {
        if (firstSheet[address]) {
          customArray3.push(firstSheet[address].v);
        }
      }
    };
  
    reader.readAsArrayBuffer(file);
  }

function displayOnCanvas2() {
  if (backgroundImage2Loaded) {
    let canvas2 = document.getElementById('canvas2');
    let ctx2 = canvas2.getContext('2d');
    let bgImage2 = document.getElementById('bg-image2');
    canvas2.width = 1920
    canvas2.height = 1080

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.drawImage(bgImage2, 0, 0, canvas2.width, canvas2.height);
    ctx2.fillStyle = 'white';

  // Define a maximum width for the mvp text
  let maxWidth = 200; // Adjust this as needed

  // Function to fit text within a maximum width and adjust font size
  function fitTextWithinWidth(text, maxWidth) {
    let fontSize = 30; // Initial font size
    ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
    let width = ctx2.measureText(text).width;

    // Decrease font size until the text fits within maxWidth
    while (width > maxWidth && fontSize > 10) {
      fontSize--; // Decrease font size
      ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
      width = ctx2.measureText(text).width;
    }

    return fontSize;
  }

  // Get the optimal font size for mvp text
  let fontSize = fitTextWithinWidth(mvp, maxWidth);

  // Display the mvp text with the optimal font size
  ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx2.fillText(mvp, 760, 540);
  
  let x=810
  const startY = 98; // Adjust the starting Y position as needed
  const lineHeight = 152; // Adjust the line height as needed
  ctx2.font = '40px "Bebas Neue", sans-serif';
  for (let i = 0; i < customArray2.length; i++) {
    const value = customArray2[i];
    const y = startY + i * lineHeight;
    ctx2.fillText(value, x, y);
    x = x - 10 
  }
  ctx2.fillText(hitrate2, 800, 680);

  // Get the optimal font size for mvp1 text
  fontSize = fitTextWithinWidth(mvp1, maxWidth);

  // Display the mvp1 text with the optimal font size
  ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx2.fillText(mvp1, 1040, 540);
  x = 1070
  ctx2.font = '40px "Bebas Neue", sans-serif';
  for (let i = 0; i < customArray3.length; i++) {
    const value = customArray3[i];
    const y = startY + i * lineHeight;
    ctx2.fillText(value, x, y);
    x = x - 5 
  }
  ctx2.fillText(hitrate3, 1080, 680);

  maxWidth = 600

  function fitTextWithinWidth1(text, maxWidth) {
    let fontSize = 50; // Initial font size
    ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
    let width = ctx2.measureText(text).width;

    // Decrease font size until the text fits within maxWidth
    while (width > maxWidth && fontSize > 10) {
      fontSize--; // Decrease font size
      ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
      width = ctx2.measureText(text).width;
    }

    return fontSize;
  }

  fontSize = fitTextWithinWidth1(TeamName3, maxWidth);
  ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx2.fillText(TeamName3,185,690);
  fontSize = fitTextWithinWidth1(TeamName4, maxWidth);
  ctx2.font = fontSize + 'px "Bebas Neue", sans-serif';
  ctx2.fillText(TeamName4,1435,690);
  console.log(TeamName1)
  ctx2.font = '55px "Bebas Neue", sans-serif'
  ctx2.fillText(matchFormat,1600,870 )
  } else {
    alert('Please select a background image for the second canvas first.');
  }
}

document.getElementById('downloadButton2').addEventListener('click', () => {
  const canvas2 = document.getElementById('canvas2');
  const downloadLink2 = document.createElement('a');
  downloadLink2.href = canvas2.toDataURL();
  downloadLink2.download = 'canvas2.png';
  downloadLink2.click();
});