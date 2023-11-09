document.getElementById('bgImage8').addEventListener('change', handleBackgroundImage8);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage8Loaded = false;
let Armiese = []
let Counte = []
let Usagee = []
let Avge = []
let Avg1e = []
let Stare = []

document.getElementById('showOnEightCanvas').addEventListener('click', () => {
  if (backgroundImage8Loaded) {
    displayOnCanvas8();
  } else {
    alert('Please select a background image for the Seventh canvas first.');
  }
});

function handleBackgroundImage8(event) {
  const bgImage8 = document.getElementById('bg-image8');
  bgImage8.src = URL.createObjectURL(event.target.files[0]);
  bgImage8.onload = () => {
    backgroundImage8Loaded = true;
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
      const Armies1e = ['A59', 'A60', 'A61','A62','A63'];
      const Count1e = ['B59', 'B60', 'B61','B62','B63'];
      const Usage1e = ['C59', 'C60', 'C61','C62','C63'];
      const avge = ['D59', 'D60', 'D61','D62','D63'];
      const avg1e = ['E59', 'E60', 'E61','E62','E63'];
      const stare = ['F59', 'F60', 'F61','F62','F63'];
   
      for (const address of Armies1e) {
        if (firstSheet[address]) {
          Armiese.push(firstSheet[address].v);
        }
      }
      for (const address of Count1e) {
        if (firstSheet[address]) {
          Counte.push(firstSheet[address].v);
        }
      }
      for (const address of Usage1e) {
        if (firstSheet[address]) {
          Usagee.push(firstSheet[address].v);
        }
      }
      for (const address of avge) {
        if (firstSheet[address]) {
          Avge.push(firstSheet[address].v);
        }
      }
      for (const address of avg1e) {
        if (firstSheet[address]) {
          Avg1e.push(firstSheet[address].v);
        }
      }
      for (const address of stare) {
        if (firstSheet[address]) {
          Stare.push(firstSheet[address].v);
        }
      }
      
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas8() {
    if (backgroundImage8Loaded) {
      let canvas8 = document.getElementById('canvas8');
      let ctx8 = canvas8.getContext('2d');
      let bgImage8 = document.getElementById('bg-image8');
      canvas8.width = 1920
      canvas8.height = 1080
  
      ctx8.clearRect(0, 0, canvas8.width, canvas8.height);
      ctx8.drawImage(bgImage8, 0, 0, canvas8.width, canvas8.height);
      ctx8.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx8.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 1000; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 50; // Initial font size
        ctx8.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx8.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx8.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx8.measureText(text).width;
        }
  
        return fontSize;
      }
      
  
      // Get the optimal font size for mvp text
  
      // Display customArray4 horizontally
      let x = 660; // Initial X position
      let y = 540
      for (let i = 0; i < Armiese.length; i++) {
        let fontSize = fitTextWithinWidth(Armiese[i], maxWidth);
        ctx8.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Armiese[i];
        ctx8.fillText(value, x, y);
        y= y + 90
      }

      let j = 990; // Initial X position
      let l = 540
      for (let i = 0; i < Counte.length; i++) {
        let fontSize = fitTextWithinWidth(Counte[i], maxWidth);
        ctx8.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Counte[i];
        ctx8.fillText(value, j, l);
        l = l + 90
      }

      j = 1135; // Initial X position
      l = 540
      for (let i = 0; i < Usagee.length; i++) {
        let fontSize = fitTextWithinWidth(Usagee[i], maxWidth);
        ctx8.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Usagee[i];
        ctx8.fillText(value, j, l);
        l = l + 90
      }

      j = 1355; // Initial X position
      l = 540
      for (let i = 0; i < Avge.length; i++) {
        let fontSize = fitTextWithinWidth(Avge[i], maxWidth);
        ctx8.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avge[i];
        ctx8.fillText(value, j, l);
        l = l + 90
      }
      
    
    j = 1525; // Initial X position
      l = 540
      for (let i = 0; i < Avg1e.length; i++) {
        let fontSize = fitTextWithinWidth(Avg1e[i], maxWidth);
        ctx8.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg1e[i];
        ctx8.fillText(value, j, l);
        l = l +90
      }
      
      j = 1710; // Initial X position
      l = 540
      for (let i = 0; i < Stare.length; i++) {
        let fontSize = fitTextWithinWidth(Stare[i], maxWidth);
        ctx8.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Stare[i];
        ctx8.fillText(value, j, l);
        l = l + 90
      }
    }
  }

  document.getElementById('downloadButton8').addEventListener('click', () => {
    const canvas8 = document.getElementById('canvas8');
    const downloadLink8 = document.createElement('a');
    downloadLink8.href = canvas7.toDataURL();
    downloadLink8.download = 'canvas7.png';
    downloadLink8.click();
  });
  
  