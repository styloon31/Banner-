document.getElementById('bgImage5').addEventListener('change', handleBackgroundImage5);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage5Loaded = false;
let Bases = []
let Count = []
let Usage = []
let Avg = []
let Avg1 = []
let Failure = []

document.getElementById('showOnFifthCanvas').addEventListener('click', () => {
  if (backgroundImage5Loaded) {
    displayOnCanvas5();
  } else {
    alert('Please select a background image for the fifth canvas first.');
  }
});

function handleBackgroundImage5(event) {
  const bgImage5 = document.getElementById('bg-image5');
  bgImage5.src = URL.createObjectURL(event.target.files[0]);
  bgImage5.onload = () => {
    backgroundImage5Loaded = true;
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
      const Bases1 = ['A37', 'A38', 'A39','A40'];
      const Count1 = ['B37', 'B38', 'B39','B40'];
      const Usage1 = ['C37', 'C38', 'C39','C40'];
      const avg = ['D37', 'D38', 'D39','D40'];
      const avg1 = ['E37', 'E38', 'E39','E40'];
      const failure = ['F37', 'F38', 'F39','F40']
   
      for (const address of Bases1) {
        if (firstSheet[address]) {
          Bases.push(firstSheet[address].v);
        }
      }
      for (const address of Count1) {
        if (firstSheet[address]) {
          Count.push(firstSheet[address].v);
        }
      }
      for (const address of Usage1) {
        if (firstSheet[address]) {
          Usage.push(firstSheet[address].v);
        }
      }
      for (const address of avg) {
        if (firstSheet[address]) {
          Avg.push(firstSheet[address].v);
        }
      }
      for (const address of avg1) {
        if (firstSheet[address]) {
          Avg1.push(firstSheet[address].v);
        }
      }
      for (const address of failure) {
        if (firstSheet[address]) {
          Failure.push(firstSheet[address].v);
        }
      }
      
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas5() {
    if (backgroundImage5Loaded) {
      let canvas5 = document.getElementById('canvas5');
      let ctx5 = canvas5.getContext('2d');
      let bgImage5 = document.getElementById('bg-image5');
      canvas5.width = 1920
      canvas5.height = 1080
  
      ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
      ctx5.drawImage(bgImage5, 0, 0, canvas5.width, canvas5.height);
      ctx5.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx5.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 1000; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 50; // Initial font size
        ctx5.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx5.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx5.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx5.measureText(text).width;
        }
  
        return fontSize;
      }
      
  
      // Get the optimal font size for mvp text
  
      // Display customArray4 horizontally
      let x = 720; // Initial X position
      let y = 540
      for (let i = 0; i < Bases.length; i++) {
        let fontSize = fitTextWithinWidth(Bases[i], maxWidth);
        ctx5.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Bases[i];
        ctx5.fillText(value, x, y);
        y= y + 115
      }
//930 1060
      let j = 980; // Initial X position
      let l = 540
      for (let i = 0; i < Count.length; i++) {
        let fontSize = fitTextWithinWidth(Count[i], maxWidth);
        ctx5.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Count[i];
        let k = ctx5.measureText(value).width
        j = centerAlign(950,1080,k)
        ctx5.fillText(value, j, l);
        l = l + 115
      }

      j = 1135; // Initial X position
      l = 540
      for (let i = 0; i < Usage.length; i++) {
        let fontSize = fitTextWithinWidth(Usage[i], maxWidth);
        ctx5.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Usage[i];
        let k = ctx5.measureText(value).width
        j = centerAlign(1140,1280,k)
        ctx5.fillText(value, j, l);
        l = l + 115
      }

      j = 1355; // Initial X position
      l = 540
      for (let i = 0; i < Avg.length; i++) {
        let fontSize = fitTextWithinWidth(Avg[i], maxWidth);
        ctx5.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg[i];
        ctx5.fillText(value, j, l);
        l = l + 115
      }
      
    
    j = 1525; // Initial X position
      l = 540
      for (let i = 0; i < Avg1.length; i++) {
        let fontSize = fitTextWithinWidth(Avg1[i], maxWidth);
        ctx5.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg1[i];
        ctx5.fillText(value, j, l);
        l = l + 115
      }
      
      j = 1710; // Initial X position
      l = 540
      for (let i = 0; i < Failure.length; i++) {
        let fontSize = fitTextWithinWidth(Failure[i], maxWidth);
        ctx5.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Failure[i];
        ctx5.fillText(value, j, l);
        l = l + 115
      }
    }
  }

  document.getElementById('downloadButton5').addEventListener('click', () => {
    const canvas5 = document.getElementById('canvas5');
    const downloadLink5 = document.createElement('a');
    downloadLink5.href = canvas5.toDataURL();
    downloadLink5.download = 'canvas5.png';
    downloadLink5.click();
  });
  
  