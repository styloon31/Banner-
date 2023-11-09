document.getElementById('bgImage7').addEventListener('change', handleBackgroundImage7);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage7Loaded = false;
let Armies = []
let Countb = []
let Usageb = []
let Avgb = []
let Avg1b = []
let Star = []

document.getElementById('showOnSeventhCanvas').addEventListener('click', () => {
  if (backgroundImage7Loaded) {
    displayOnCanvas7();
  } else {
    alert('Please select a background image for the Seventh canvas first.');
  }
});

function handleBackgroundImage7(event) {
  const bgImage7 = document.getElementById('bg-image7');
  bgImage7.src = URL.createObjectURL(event.target.files[0]);
  bgImage7.onload = () => {
    backgroundImage7Loaded = true;
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
      const Armies1 = ['A51', 'A52', 'A53','A54','A55'];
      const Count1b = ['B51', 'B52', 'B53','B54','B55'];
      const Usage1b = ['C51', 'C52', 'C53','C54','C55'];
      const avgb = ['D51', 'D52', 'D53','D54','D55'];
      const avg1b = ['E51', 'E52', 'E53','E54','E55'];
      const star = ['F51', 'F52', 'F53','F54','F55'];
   
      for (const address of Armies1) {
        if (firstSheet[address]) {
          Armies.push(firstSheet[address].v);
        }
      }
      for (const address of Count1b) {
        if (firstSheet[address]) {
          Countb.push(firstSheet[address].v);
        }
      }
      for (const address of Usage1b) {
        if (firstSheet[address]) {
          Usageb.push(firstSheet[address].v);
        }
      }
      for (const address of avgb) {
        if (firstSheet[address]) {
          Avgb.push(firstSheet[address].v);
        }
      }
      for (const address of avg1b) {
        if (firstSheet[address]) {
          Avg1b.push(firstSheet[address].v);
        }
      }
      for (const address of star) {
        if (firstSheet[address]) {
          Star.push(firstSheet[address].v);
        }
      }
      
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas7() {
    if (backgroundImage7Loaded) {
      let canvas7 = document.getElementById('canvas7');
      let ctx7 = canvas7.getContext('2d');
      let bgImage7 = document.getElementById('bg-image7');
      canvas7.width = 1920
      canvas7.height = 1080
  
      ctx7.clearRect(0, 0, canvas7.width, canvas7.height);
      ctx7.drawImage(bgImage7, 0, 0, canvas7.width, canvas7.height);
      ctx7.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx7.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 1000; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 50; // Initial font size
        ctx7.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx7.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx7.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx7.measureText(text).width;
        }
  
        return fontSize;
      }
      
  
      // Get the optimal font size for mvp text
  
      // Display customArray4 horizontally
      let x = 660; // Initial X position
      let y = 540
      for (let i = 0; i < Armies.length; i++) {
        let fontSize = fitTextWithinWidth(Armies[i], maxWidth);
        ctx7.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Armies[i];
        ctx7.fillText(value, x, y);
        y= y + 90
      }

      let j = 990; // Initial X position
      let l = 540
      for (let i = 0; i < Countb.length; i++) {
        let fontSize = fitTextWithinWidth(Countb[i], maxWidth);
        ctx7.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Countb[i];
        ctx7.fillText(value, j, l);
        l = l + 90
      }

      j = 1135; // Initial X position
      l = 540
      for (let i = 0; i < Usageb.length; i++) {
        let fontSize = fitTextWithinWidth(Usageb[i], maxWidth);
        ctx7.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Usageb[i];
        ctx7.fillText(value, j, l);
        l = l + 90
      }

      j = 1355; // Initial X position
      l = 540
      for (let i = 0; i < Avgb.length; i++) {
        let fontSize = fitTextWithinWidth(Avgb[i], maxWidth);
        ctx7.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avgb[i];
        ctx7.fillText(value, j, l);
        l = l + 90
      }
      
    
    j = 1525; // Initial X position
      l = 540
      for (let i = 0; i < Avg1b.length; i++) {
        let fontSize = fitTextWithinWidth(Avg1b[i], maxWidth);
        ctx7.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg1b[i];
        ctx7.fillText(value, j, l);
        l = l +90
      }
      
      j = 1710; // Initial X position
      l = 540
      for (let i = 0; i < Star.length; i++) {
        let fontSize = fitTextWithinWidth(Star[i], maxWidth);
        ctx7.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Star[i];
        ctx7.fillText(value, j, l);
        l = l + 90
      }
    }
  }

  document.getElementById('downloadButton7').addEventListener('click', () => {
    const canvas7 = document.getElementById('canvas7');
    const downloadLink7 = document.createElement('a');
    downloadLink7.href = canvas7.toDataURL();
    downloadLink7.download = 'canvas7.png';
    downloadLink7.click();
  });
  
  