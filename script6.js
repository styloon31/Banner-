document.getElementById('bgImage6').addEventListener('change', handleBackgroundImage6);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage6Loaded = false;
let Basesa = []
let Counta = []
let Usagea = []
let Avga = []
let Avg1a = []
let Failurea = []

document.getElementById('showOnSixthCanvas').addEventListener('click', () => {
  if (backgroundImage6Loaded) {
    displayOnCanvas6();
  } else {
    alert('Please select a background image for the Sixth canvas first.');
  }
});

function handleBackgroundImage6(event) {
  const bgImage6 = document.getElementById('bg-image6');
  bgImage6.src = URL.createObjectURL(event.target.files[0]);
  bgImage6.onload = () => {
    backgroundImage6Loaded = true;
  };
}

function centerAlign(a, b,textLenth){
  let c = b - a;
  let space = (c - textLenth)/2;
  c = a + space;
  return c;
}

function handleXLSXFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      cellValue = firstSheet['F2'].v; // Assuming you want data from cell A1
      const Bases1a = ['A44', 'A45', 'A46','A47'];
      const Count1a = ['B44', 'B45', 'B46','B47'];
      const Usage1a = ['C44', 'C45', 'C46','C47'];
      const avga = ['D44', 'D45', 'D46','D47'];
      const avg1a = ['E44', 'E45', 'E46','E47'];
      const failurea = ['F44', 'F45', 'F46','F47'];
   
      for (const address of Bases1a) {
        if (firstSheet[address]) {
          Basesa.push(firstSheet[address].v);
        }
      }
      for (const address of Count1a) {
        if (firstSheet[address]) {
          Counta.push(firstSheet[address].v);
        }
      }
      for (const address of Usage1a) {
        if (firstSheet[address]) {
          Usagea.push(firstSheet[address].v);
        }
      }
      for (const address of avga) {
        if (firstSheet[address]) {
          Avga.push(firstSheet[address].v);
        }
      }
      for (const address of avg1a) {
        if (firstSheet[address]) {
          Avg1a.push(firstSheet[address].v);
        }
      }
      for (const address of failurea) {
        if (firstSheet[address]) {
          Failurea.push(firstSheet[address].v);
        }
      }
      
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas6() {
    if (backgroundImage6Loaded) {
      let canvas6 = document.getElementById('canvas6');
      let ctx6 = canvas6.getContext('2d');
      let bgImage6 = document.getElementById('bg-image6');
      canvas6.width = 1920
      canvas6.height = 1080
  
      ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
      ctx6.drawImage(bgImage6, 0, 0, canvas6.width, canvas6.height);
      ctx6.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx6.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 1000; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 50; // Initial font size
        ctx6.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx6.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx6.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx6.measureText(text).width;
        }
  
        return fontSize;
      }
      
  
      // Get the optimal font size for mvp text
  
      // Display customArray4 horizontally
      let x = 720; // Initial X position
      let y = 540
      for (let i = 0; i < Bases.length; i++) {
        let fontSize = fitTextWithinWidth(Bases[i], maxWidth);
        ctx6.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Bases[i];
        ctx6.fillText(value, x, y);
        y= y + 115
      }

      let j = 980; // Initial X position
      let l = 540
      for (let i = 0; i < Count.length; i++) {
        let fontSize = fitTextWithinWidth(Count[i], maxWidth);
        ctx6.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Count[i];
        let k = ctx6.measureText(value).width
        j = centerAlign(950,1080,k)
        ctx6.fillText(value, j, l);
        l = l + 115
      }

      j = 1155; // Initial X position
      l = 540
      for (let i = 0; i < Usage.length; i++) {
        let fontSize = fitTextWithinWidth(Usage[i], maxWidth);
        ctx6.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Usage[i];
        let k = ctx6.measureText(value).width
        j = centerAlign(1140,1280,k)
        ctx6.fillText(value, j, l);
        l = l + 115
      }

      j = 1355; // Initial X position
      l = 540
      for (let i = 0; i < Avg.length; i++) {
        let fontSize = fitTextWithinWidth(Avg[i], maxWidth);
        ctx6.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg[i];
        ctx6.fillText(value, j, l);
        l = l + 115
      }
      
    
    j = 1525; // Initial X position
      l = 540
      for (let i = 0; i < Avg1.length; i++) {
        let fontSize = fitTextWithinWidth(Avg1[i], maxWidth);
        ctx6.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg1[i];
        ctx6.fillText(value, j, l);
        l = l + 115
      }
      
      j = 1710; // Initial X position
      l = 540
      for (let i = 0; i < Failure.length; i++) {
        let fontSize = fitTextWithinWidth(Failure[i], maxWidth);
        ctx6.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Failure[i];
        ctx6.fillText(value, j, l);
        l = l + 115
      }
    }
  }

  document.getElementById('downloadButton6').addEventListener('click', () => {
    const canvas6 = document.getElementById('canvas6');
    const downloadLink6 = document.createElement('a');
    downloadLink6.href = canvas6.toDataURL();
    downloadLink6.download = 'canvas6.png';
    downloadLink6.click();
  });
  
  