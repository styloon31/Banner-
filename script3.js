document.getElementById('bgImage3').addEventListener('change', handleBackgroundImage3);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage3Loaded = false;
let customArray4 = []
let customArray5 = []
let customArray6 = []
let customArray7 = []
let customArray8 = []
let customArray9 = []
let cstar1 = []
let cstar2 = []
let cstar3 = []
let cstar4 = []

document.getElementById('showOnThirdCanvas').addEventListener('click', () => {
  if (backgroundImage3Loaded) {
    displayOnCanvas3();
  } else {
    alert('Please select a background image for the third canvas first.');
  }
});

function handleBackgroundImage3(event) {
  const bgImage3 = document.getElementById('bg-image3');
  bgImage3.src = URL.createObjectURL(event.target.files[0]);
  bgImage3.onload = () => {
    backgroundImage3Loaded = true;
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
      const cellAddresses5 = ['B11', 'C11', 'D11','E11','F11','G11'];
      const cellAddresses6 = ['H11', 'I11', 'J11','K11'];
      const celladdresses7 = ['B12', 'C12', 'D12','E12','F12','G12']
      const celladdresses8 = ['B13', 'C13', 'D13','E13','F13','G13']
      const celladdresses9 = ['B14', 'C14', 'D14','E14','F14','G14']
      const celladdresses10 = ['B15', 'C15', 'D15','E15','F15','G15']
      const cell1 = ['H12', 'I12', 'J12','K12']
      const cell2 = ['H13', 'I13', 'J13','K13']
      const cell3 = ['H14', 'I14', 'J14','K14']
      const cell4 = ['H15', 'I15', 'J15','K15']
  
      for (const address of cellAddresses5) {
        if (firstSheet[address]) {
          customArray4.push(firstSheet[address].v);
        }
      }
      for (const address of cellAddresses6) {
        if (firstSheet[address]) {
          customArray5.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses7) {
        if (firstSheet[address]) {
          customArray6.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses8) {
        if (firstSheet[address]) {
          customArray7.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses9) {
        if (firstSheet[address]) {
          customArray8.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses10) {
        if (firstSheet[address]) {
          customArray9.push(firstSheet[address].v);
        }
      }
      for (const address of cell1) {
        if (firstSheet[address]) {
          cstar1.push(firstSheet[address].v);
        }
      }
      for (const address of cell2) {
        if (firstSheet[address]) {
          cstar2.push(firstSheet[address].v);
        }
      }
      for (const address of cell3) {
        if (firstSheet[address]) {
          cstar3.push(firstSheet[address].v);
        }
      }
      for (const address of cell4) {
        if (firstSheet[address]) {
          cstar4.push(firstSheet[address].v);
        }
      }
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas3() {
    if (backgroundImage3Loaded) {
      let canvas3 = document.getElementById('canvas3');
      let ctx3 = canvas3.getContext('2d');
      let bgImage3 = document.getElementById('bg-image3');
      canvas3.width = 1920
      canvas3.height = 1080
  
      ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
      ctx3.drawImage(bgImage3, 0, 0, canvas3.width, canvas3.height);
      ctx3.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx3.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 100; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 30; // Initial font size
        ctx3.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx3.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx3.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx3.measureText(text).width;
          console.log(width)
        }
  
        return fontSize;
      }
  
      // Get the optimal font size for mvp text
  
      // Display customArray4 horizontally
      let x = 440; // Initial X position
  
      for (let i = 0; i < customArray4.length; i++) {
        let fontSize = fitTextWithinWidth(customArray4[i], maxWidth);
        ctx3.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray4[i];
        if(customArray4[i] == customArray4[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 260, 520);
        }
        else if (customArray4[i] ==customArray4[5]){
          ctx3.fillText(value, 900, 520);
        }
        else if (customArray4[i] ==customArray4[4]){
          ctx3.fillText(value, 800, 520);
        }
        else if (customArray4[i] ==customArray4[3]){
          ctx3.fillText(value, 680, 520);
        }
        else if (customArray4[i] == customArray4[2]){
          ctx3.fillText(value, 550, 520);
        }
        else{
        ctx3.fillText(value, x, 520);
        x += ctx3.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }
      
      let k = 440; // Initial X position
  
      for (let i = 0; i < customArray6.length; i++) {
        let fontSize = fitTextWithinWidth(customArray6[i], maxWidth);
        ctx3.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray6[i];
        if(customArray6[i] == customArray6[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value,260, 640);
        }
        else if (customArray6[i] ==customArray6[5]){
          ctx3.fillText(value, 900, 640);
        }
        else if (customArray6[i] ==customArray6[4]){
          ctx3.fillText(value, 800, 640);
        }
        else if (customArray6[i] ==customArray6[3]){
          ctx3.fillText(value, 680, 640);
        }
        else if (customArray6[i] == customArray6[2]){
          ctx3.fillText(value, 550, 640);
        }
        else{
        ctx3.fillText(value, k, 640);
        k += ctx3.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }


      x= 440
      for (let i = 0; i < customArray7.length; i++) {
        let fontSize = fitTextWithinWidth(customArray7[i], maxWidth);
        ctx3.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray7[i];
        if(customArray7[i] == customArray7[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 260, 760);
        }
        else if (customArray7[i] ==customArray7[5]){
          ctx3.fillText(value, 900, 760);
        }
        else if (customArray7[i] ==customArray7[4]){
          ctx3.fillText(value, 800, 760);
        }
        else if (customArray7[i] ==customArray7[3]){
          ctx3.fillText(value, 680, 760);
        }
        else if (customArray7[i] == customArray7[2]){
          ctx3.fillText(value, 550, 760);
        }
        else{
        ctx3.fillText(value, x, 760);
        x += ctx3.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }


      x= 440
      for (let i = 0; i < customArray8.length; i++) {
        let fontSize = fitTextWithinWidth(customArray8[i], maxWidth);
        ctx3.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray8[i];
        if(customArray8[i] == customArray8[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 260, 880);
        }
        else if (customArray8[i] ==customArray8[5]){
          ctx3.fillText(value, 900, 877);
        }
        else if (customArray8[i] ==customArray8[4]){
          ctx3.fillText(value, 800, 877);
        }
        else if (customArray8[i] ==customArray8[3]){
          ctx3.fillText(value, 680, 877);
        }
        else if (customArray8[i] == customArray8[2]){
          ctx3.fillText(value, 550, 877);
        }
        else{
        ctx3.fillText(value, x, 880);
        x += ctx3.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }

      x= 440
      for (let i = 0; i < customArray9.length; i++) {
        let fontSize = fitTextWithinWidth(customArray9[i], maxWidth);
        ctx3.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray9[i];
        if(customArray9[i] == customArray9[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 260, 1000);
        }
        else if (customArray9[i] ==customArray9[5]){
          ctx3.fillText(value, 900, 1000);
        }
        else if (customArray9[i] ==customArray9[4]){
          ctx3.fillText(value, 800, 1000);
        }
        else if (customArray9[i] ==customArray9[3]){
          ctx3.fillText(value, 680, 1000);
        }
        else if (customArray9[i] == customArray9[2]){
          ctx3.fillText(value, 550, 1000);
        }
        else{
        ctx3.fillText(value, x, 1000);
        x += ctx3.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }
  
      
      // Display customArray5 horizontally
      x = 1440; // Reset X position
      ctx3.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < customArray5.length; i++) {
        let fontSize = fitTextWithinWidth(customArray5[i], maxWidth);
        ctx3.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray5[i];
        if(customArray5[i] == customArray5[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 1240, 520);
        }
        else if (customArray5[i] ==customArray5[3]){
          ctx3.fillText(value, 1670, 520);
        }
        else if (customArray4[i] == customArray4[2]){
          ctx3.fillText(value, 1540, 520);
        }
        else{
        ctx3.fillText(value, x, 520); // Adjust the Y position as needed
        x += ctx3.measureText(value).width + 80;
        }
      }


      x = 1440; // Reset X position
      ctx3.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar1.length; i++) {
        let fontSize = fitTextWithinWidth(cstar1[i], maxWidth);
        ctx3.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar1[i];
        if(cstar1[i] == cstar1[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 1240, 640);
        }
        else if (cstar1[i] ==cstar1[3]){
          ctx3.fillText(value, 1670, 640);
        }
        else if (cstar1[i] == cstar1[2]){
          ctx3.fillText(value, 1540, 640);
        }
        else{
        ctx3.fillText(value, x, 640); // Adjust the Y position as needed
        x += ctx3.measureText(value).width +70;
        }
      }

  
      x = 1440; // Reset X position
      ctx3.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar2.length; i++) {
        let fontSize = fitTextWithinWidth(cstar2[i], maxWidth);
        ctx3.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar2[i];
        if(cstar2[i] == cstar2[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 1240, 760);
        }
        else if (cstar2[i] ==cstar2[3]){
          ctx3.fillText(value, 1670, 760);
        }
        else if (cstar2[i] == cstar2[2]){
          ctx3.fillText(value, 1540, 760);
        }
        else{
        ctx3.fillText(value, x, 760); // Adjust the Y position as needed
        x += ctx3.measureText(value).width + 70;
        }
      }

      x = 1440; // Reset X position
      ctx3.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar3.length; i++) {
        let fontSize = fitTextWithinWidth(cstar3[i], maxWidth);
        ctx3.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar3[i];
        if(cstar3[i] == cstar3[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 1240, 880);
        }
        else if (cstar3[i] ==cstar3[3]){
          ctx3.fillText(value, 1670, 880);
        }
        else if (cstar3[i] == cstar3[2]){
          ctx3.fillText(value, 1540, 880);
        }
        else{
        ctx3.fillText(value, x, 880); // Adjust the Y position as needed
        x += ctx3.measureText(value).width + 70;
        }
      }

      x = 1440; // Reset X position
      ctx3.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar4.length; i++) {
        let fontSize = fitTextWithinWidth(cstar4[i], maxWidth);
        ctx3.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar4[i];
        if(cstar4[i] == cstar4[0]){
          ctx3.font = '30px "Bebas Neue", sans-serif';
          ctx3.fillText(value, 1240, 1000);
        }
        else if (cstar4[i] ==cstar4[3]){
          ctx3.fillText(value, 1670, 1000);
        }
        else if (cstar4[i] == cstar4[2]){
          ctx3.fillText(value, 1540, 1000);
        }
        else{
        ctx3.fillText(value, x, 1000); // Adjust the Y position as needed
        x += ctx3.measureText(value).width + 70;
        }
      }
    } else {
      alert('Please select a background image for the third canvas first.');
    }
  }

  document.getElementById('downloadButton3').addEventListener('click', () => {
    const canvas3 = document.getElementById('canvas3');
    const downloadLink3 = document.createElement('a');
    downloadLink3.href = canvas3.toDataURL();
    downloadLink3.download = 'canvas3.png';
    downloadLink3.click();
  });
  
  