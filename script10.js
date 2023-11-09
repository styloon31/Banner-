document.getElementById('bgImage10').addEventListener('change', handleBackgroundImage10);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage10Loaded = false;
let Armiesd = []
let Countd = []
let Usaged = []
let Avgd = []
let Avg1d = []
let Stard = []

document.getElementById('showOnTenthCanvas').addEventListener('click', () => {
  if (backgroundImage10Loaded) {
    displayOnCanvas10();
  } else {
    alert('Please select a background image for the Tenth canvas first.');
  }
});

function handleBackgroundImage10(event) {
  const bgImage10 = document.getElementById('bg-image10');
  bgImage10.src = URL.createObjectURL(event.target.files[0]);
  bgImage10.onload = () => {
    backgroundImage10Loaded = true;
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
      const Armies1d = ['A72', 'A73', 'A74','A75','A76','A77','A78','A79','A80','A81'];
      const Count1d = ['B72', 'B73', 'B74','B75','B76','B77','B78','B79','B80','B81'];
      const Usage1d = ['C72', 'C73', 'C74','C75','C76','C77','C78','C79','C80','C81'];
      const avgd = ['D72', 'D73', 'D74','D75','D76','D77','D78','D79','D80','D81'];
      const avg1d = ['E72', 'E73', 'E74','E75','E76','E77','E78','E79','E80','E81'];
      const stard = ['F72', 'F73', 'F74','F75','F76','F77','F78','F79','F80','F81'];
   
      for (const address of Armies1d) {
        if (firstSheet[address]) {
          Armiesd.push(firstSheet[address].v);
        }
      }
      for (const address of Count1d) {
        if (firstSheet[address]) {
          Countd.push(firstSheet[address].v);
        }
      }
      for (const address of Usage1d) {
        if (firstSheet[address]) {
          Usaged.push(firstSheet[address].v);
        }
      }
      for (const address of avgd) {
        if (firstSheet[address]) {
          Avgd.push(firstSheet[address].v);
        }
      }
      for (const address of avg1d) {
        if (firstSheet[address]) {
          Avg1d.push(firstSheet[address].v);
        }
      }
      for (const address of stard) {
        if (firstSheet[address]) {
          Stard.push(firstSheet[address].v);
        }
      }
      
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas10() {
    if (backgroundImage10Loaded) {
      let canvas10 = document.getElementById('canvas10');
      let ctx10 = canvas10.getContext('2d');
      let bgImage10 = document.getElementById('bg-image10');
      canvas10.width = 1920
      canvas10.height = 1080
  
      ctx10.clearRect(0, 0, canvas10.width, canvas10.height);
      ctx10.drawImage(bgImage10, 0, 0, canvas10.width, canvas10.height);
      ctx10.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx10.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 1000; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 50; // Initial font size
        ctx10.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx10.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx10.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx10.measureText(text).width;
        }
  
        return fontSize;
      }
      
  
      // Get the optimal font size for mvp text
  
      // Display customArray4 horizontally
      let x = 660; // Initial X position
      let y = 420
      for (let i = 0; i < Armiesd.length; i++) {
        let fontSize = fitTextWithinWidth(Armiesd[i], maxWidth);
        ctx10.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Armiesd[i];
        
        if(i == 3){
            ctx10.fillText(value,x,605)
        }else if(i==4){
            ctx10.fillText(value , x , 665)
        }else if(i ==5){
            ctx10.fillText(value , x , 730)
        }else if(i ==6){
            ctx10.fillText(value , x , 790)
        }else if(i ==7){
            ctx10.fillText(value , x , 850)
        }else if(i ==8){
            ctx10.fillText(value , x , 915)
        }else if(i ==9){
            ctx10.fillText(value , x , 975)
        }else{
            ctx10.fillText(value, x, y);
        }
        y= y + 60
        
      }

      let j = 960; // Initial X position
      let l = 420
      for (let i = 0; i < Countd.length; i++) {
        let fontSize = fitTextWithinWidth(Countd[i], maxWidth);
        ctx10.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Countd[i];
        if(i == 3){
            ctx10.fillText(value,j,605)
        }else if(i==4){
            ctx10.fillText(value , j , 665)
        }else if(i ==5){
            ctx10.fillText(value , j , 730)
        }else if(i ==6){
            ctx10.fillText(value , j , 790)
        }else if(i ==7){
            ctx10.fillText(value , j , 850)
        }else if(i ==8){
            ctx10.fillText(value , j , 915)
        }else if(i ==9){
            ctx10.fillText(value , j , 975)
        }else{
            ctx10.fillText(value, j, l);
        }
        l= l + 60
      }

      j = 1135; // Initial X position
      l = 420
      for (let i = 0; i < Usaged.length; i++) {
        let fontSize = fitTextWithinWidth(Usaged[i], maxWidth);
        ctx10.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Usaged[i];
        if(i == 3){
            ctx10.fillText(value,j,605)
        }else if(i==4){
            ctx10.fillText(value , j , 665)
        }else if(i ==5){
            ctx10.fillText(value , j , 730)
        }else if(i ==6){
            ctx10.fillText(value , j , 790)
        }else if(i ==7){
            ctx10.fillText(value , j , 850)
        }else if(i ==8){
            ctx10.fillText(value , j , 915)
        }else if(i ==9){
            ctx10.fillText(value , j , 975)
        }else{
            ctx10.fillText(value, j, l);
        }
        l= l + 60
      }

      j = 1355; // Initial X position
      l = 420
      for (let i = 0; i < Avgd.length; i++) {
        let fontSize = fitTextWithinWidth(Avgd[i], maxWidth);
        ctx10.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avgd[i];
        if(i == 3){
            ctx10.fillText(value,j,605)
        }else if(i==4){
            ctx10.fillText(value , j , 665)
        }else if(i ==5){
            ctx10.fillText(value , j , 730)
        }else if(i ==6){
            ctx10.fillText(value , j , 790)
        }else if(i ==7){
            ctx10.fillText(value , j , 850)
        }else if(i ==8){
            ctx10.fillText(value , j , 915)
        }else if(i ==9){
            ctx10.fillText(value , j , 975)
        }else{
            ctx10.fillText(value, j, l);
        }
        l= l + 60
      }
      
    
    j = 1525; // Initial X position
      l = 420
      for (let i = 0; i < Avg1d.length; i++) {
        let fontSize = fitTextWithinWidth(Avg1d[i], maxWidth);
        ctx10.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Avg1d[i];
        if(i == 3){
            ctx10.fillText(value,j,605)
        }else if(i==4){
            ctx10.fillText(value , j , 665)
        }else if(i ==5){
            ctx10.fillText(value , j , 730)
        }else if(i ==6){
            ctx10.fillText(value , j , 790)
        }else if(i ==7){
            ctx10.fillText(value , j , 850)
        }else if(i ==8){
            ctx10.fillText(value , j , 915)
        }else if(i ==9){
            ctx10.fillText(value , j , 975)
        }else{
            ctx10.fillText(value, j, l);
        }
        l= l + 60
      }
      
      j = 1710; // Initial X position
      l = 420
      for (let i = 0; i < Stard.length; i++) {
        let fontSize = fitTextWithinWidth(Stard[i], maxWidth);
        ctx10.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = Stard[i];
        if(i == 3){
            ctx10.fillText(value,j,605)
        }else if(i==4){
            ctx10.fillText(value , j , 665)
        }else if(i ==5){
            ctx10.fillText(value , j , 730)
        }else if(i ==6){
            ctx10.fillText(value , j , 790)
        }else if(i ==7){
            ctx10.fillText(value , j , 850)
        }else if(i ==8){
            ctx10.fillText(value , j , 915)
        }else if(i ==9){
            ctx10.fillText(value , j , 975)
        }else{
            ctx10.fillText(value, j, l);
        }
        l= l + 60
      }
    }
  }

  document.getElementById('downloadButton10').addEventListener('click', () => {
    const canvas10 = document.getElementById('canvas10');
    const downloadLink10 = document.createElement('a');
    downloadLink10.href = canvas10.toDataURL();
    downloadLink10.download = 'canvas10.png';
    downloadLink10.click();
  });
  
  