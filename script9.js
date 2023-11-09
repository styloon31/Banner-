document.getElementById('bgImage9').addEventListener('change', handleBackgroundImage9);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage9Loaded = false;
let Name = []
let Countc = []
let Usagec = []
let Avgc = []
let Avg1c = []
let Stara = []

document.getElementById('showOnNinthCanvas').addEventListener('click', () => {
  if (backgroundImage9Loaded) {
    displayOnCanvas9();
  } else {
    alert('Please select a background image for the Ninth canvas first.');
  }
});

function handleBackgroundImage9(event) {
  const bgImage9= document.getElementById('bg-image9');
  bgImage9.src = URL.createObjectURL(event.target.files[0]);
  bgImage9.onload = () => {
    backgroundImage9Loaded = true;
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
      const Name1 = ['A66', 'A67', 'A68','A69'];
      const Count1c = ['B66', 'B67', 'B68','B69'];
      const Usage1c = ['C66', 'C67', 'C68','C69'];
      const avgc = ['D66', 'D67', 'D68','D69'];
      const avg1c = ['E66', 'E67', 'E68','E69'];
      const stara = ['F66', 'F67', 'F68','F69'];
   
      for (const address of Name1) {
        if (firstSheet[address]) {
          Name.push(firstSheet[address].v);
        }
      }
      for (const address of Count1c) {
        if (firstSheet[address]) {
          Countc.push(firstSheet[address].v);
        }
      }
      for (const address of Usage1c) {
        if (firstSheet[address]) {
          Usagec.push(firstSheet[address].v);
        }
      }
      for (const address of avgc) {
        if (firstSheet[address]) {
          Avgc.push(firstSheet[address].v);
        }
      }
      for (const address of avg1c) {
        if (firstSheet[address]) {
          Avg1c.push(firstSheet[address].v);
        }
      }
      for (const address of stara) {
        if (firstSheet[address]) {
          Stara.push(firstSheet[address].v);
        }
      }
      
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas9() {
    if (backgroundImage9Loaded) {
      let canvas9 = document.getElementById('canvas9');
      let ctx9 = canvas9.getContext('2d');
      let bgImage9 = document.getElementById('bg-image9');
      canvas9.width = 1920
      canvas9.height = 1080
  
      ctx9.clearRect(0, 0, canvas9.width, canvas9.height);
      ctx9.drawImage(bgImage9, 0, 0, canvas9.width, canvas9.height);
      ctx9.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx9.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 1000; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 50; // Initial font size
        ctx9.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx9.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx9.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx9.measureText(text).width;
        }
  
        return fontSize;
      }
      
  
      // Get the optimal font size for mvp text
  
      // Display customArray4 horizontally
      let x = 720; // Initial X position
      let y = 540
      for (let i = 0; i < Name.length; i++) {
        let fontSize = fitTextWithinWidth(Name[i], maxWidth);
        ctx9.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Name[i];
        ctx9.fillText(value, x, y);
        y= y + 115
      }

      let j = 960; // Initial X position
      let l = 540
      for (let i = 0; i < Countc.length; i++) {
        let fontSize = fitTextWithinWidth(Countc[i], maxWidth);
        ctx9.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Countc[i];
        ctx9.fillText(value, j, l);
        l = l + 115
      }

      j = 1135; // Initial X position
      l = 540
      for (let i = 0; i < Usagec.length; i++) {
        let fontSize = fitTextWithinWidth(Usagec[i], maxWidth);
        ctx9.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Usagec[i];
        ctx9.fillText(value, j, l);
        l = l + 115
      }

      j = 1355; // Initial X position
      l = 540
      for (let i = 0; i < Avgc.length; i++) {
        let fontSize = fitTextWithinWidth(Avgc[i], maxWidth);
        ctx9.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avgc[i];
        ctx9.fillText(value, j, l);
        l = l + 115
      }
      
    
    j = 1525; // Initial X position
      l = 540
      for (let i = 0; i < Avg1c.length; i++) {
        let fontSize = fitTextWithinWidth(Avg1c[i], maxWidth);
        ctx9.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg1c[i];
        ctx9.fillText(value, j, l);
        l = l + 115
      }
      
      j = 1710; // Initial X position
      l = 540
      for (let i = 0; i < Stara.length; i++) {
        let fontSize = fitTextWithinWidth(Stara[i], maxWidth);
        ctx9.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Stara[i];
        ctx9.fillText(value, j, l);
        l = l + 115
      }
    }
  }

  document.getElementById('downloadButton9').addEventListener('click', () => {
    const canvas9 = document.getElementById('canvas9');
    const downloadLink9 = document.createElement('a');
    downloadLink9.href = canvas9.toDataURL();
    downloadLink9.download = 'canvas9.png';
    downloadLink9.click();
  });
  
  