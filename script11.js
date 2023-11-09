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
      const Armies1d = ['A84', 'A85', 'A86','A87','A88','A89','A90','A91',];
      const Count1d = ['B84', 'B85', 'B86','B87','B88','B89','B90','B91',];
      const Usage1d = ['C84', 'C85', 'C86','C87','C88','C89','C90','C91',];
      const avgd = ['D84', 'D85', 'D86','D87','D88','D89','D90','D91',];
      const avg1d = ['E84', 'E85', 'E86','E87','E88','E89','E90','E91',];
      const stard = ['F84', 'F85', 'F86','F87','F88','F89','F90','F91',];
   
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

  document.getElementById('downloadButton11').addEventListener('click', () => {
    const canvas11 = document.getElementById('canvas11');
    const downloadLink11 = document.createElement('a');
    downloadLink11.href = canvas11.toDataURL();
    downloadLink11.download = 'canvas11.png';
    downloadLink11.click();
  });
  
  