document.getElementById('bgImage4').addEventListener('change', handleBackgroundImage4);
document.getElementById('xlsxFile').addEventListener('change', handleXLSXFile);

let backgroundImage4Loaded = false;
let customArray10 = []
let customArray11 = []
let customArray12 = []
let customArray13 = []
let customArray14 = []
let customArray15 = []
let cstar5 = []
let cstar6 = []
let cstar7 = []
let cstar8 = []

document.getElementById('showOnFourthCanvas').addEventListener('click', () => {
  if (backgroundImage4Loaded) {
    displayOnCanvas4();
  } else {
    alert('Please select a background image for the fourth canvas first.');
  }
});

function handleBackgroundImage4(event) {
  const bgImage4 = document.getElementById('bg-image4');
  bgImage4.src = URL.createObjectURL(event.target.files[0]);
  bgImage4.onload = () => {
    backgroundImage4Loaded = true;
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
      const cellAddresses11 = ['B19', 'C19', 'D19','E19','F19','G19'];
      const cellAddresses12 = ['H19', 'I19', 'J19','K19'];
      const celladdresses13 = ['B20', 'C20', 'D20','E20','F20','G20']
      const celladdresses14 = ['B21', 'C21', 'D21','E21','F21','G21']
      const celladdresses15 = ['B22', 'C22', 'D22','E22','F22','G22']
      const celladdresses16 = ['B23', 'C23', 'D23','E23','F23','G23']
      const cell1 = ['H20', 'I20', 'J20','K20']
      const cell2 = ['H21', 'I21', 'J21','K21']
      const cell3 = ['H22', 'I22', 'J22','K22']
      const cell4 = ['H23', 'I23', 'J23','K23']
  
      for (const address of cellAddresses11) {
        if (firstSheet[address]) {
          customArray10.push(firstSheet[address].v);
        }
      }
      for (const address of cellAddresses12) {
        if (firstSheet[address]) {
          customArray11.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses13) {
        if (firstSheet[address]) {
          customArray12.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses14) {
        if (firstSheet[address]) {
          customArray13.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses15) {
        if (firstSheet[address]) {
          customArray14.push(firstSheet[address].v);
        }
      }
      for (const address of celladdresses16) {
        if (firstSheet[address]) {
          customArray15.push(firstSheet[address].v);
        }
      }
      for (const address of cell1) {
        if (firstSheet[address]) {
          cstar5.push(firstSheet[address].v);
        }
      }
      for (const address of cell2) {
        if (firstSheet[address]) {
          cstar6.push(firstSheet[address].v);
        }
      }
      for (const address of cell3) {
        if (firstSheet[address]) {
          cstar7.push(firstSheet[address].v);
        }
      }
      for (const address of cell4) {
        if (firstSheet[address]) {
          cstar8.push(firstSheet[address].v);
        }
      }
    };
  
    reader.readAsArrayBuffer(file);
  }

  function displayOnCanvas4() {
    if (backgroundImage4Loaded) {
      let canvas4 = document.getElementById('canvas4');
      let ctx4 = canvas4.getContext('2d');
      let bgImage4 = document.getElementById('bg-image4');
      canvas4.width = 1920
      canvas4.height = 1080
  
      ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
      ctx4.drawImage(bgImage4, 0, 0, canvas4.width, canvas4.height);
      ctx4.fillStyle = 'white';
  
      // Set the font to "Bebas Neue"
      ctx4.font = 'normal 32px "Bebas Neue", sans-serif';
  
      // Define a maximum width for the mvp text
      let maxWidth = 100; // Adjust this as needed
  
      // Function to fit text within a maximum width and adjust font size
      function fitTextWithinWidth(text, maxWidth) {
        let fontSize = 30; // Initial font size
        ctx4.font =   fontSize + 'px "Bebas Neue", sans-serif';
        let width = ctx4.measureText(text).width;
  
        // Decrease font size until the text fits within maxWidth
        while (width > maxWidth && fontSize > 10) {
          fontSize--; // Decrease font size
          ctx4.font =  fontSize + 'px "Bebas Neue", sans-serif';
          width = ctx4.measureText(text).width;
        }
  
        return fontSize;
      }
  
      // Get the optimal font size for mvp text
  
      // Display customArray10 horizontally
      let x = 440; // Initial X position
      const lineHeight = 30; // Adjust the line height as needed
  
      for (let i = 0; i < customArray10.length; i++) {
        let fontSize = fitTextWithinWidth(customArray10[i], maxWidth);
        ctx4.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray10[i];
        if(customArray10[i] == customArray10[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 260, 520);
        }
        else if (customArray10[i] ==customArray10[5]){
          ctx4.fillText(value, 900, 520);
        }
        else if (customArray10[i] ==customArray10[4]){
          ctx4.fillText(value, 800, 520);
        }
        else if (customArray10[i] ==customArray10[3]){
          ctx4.fillText(value, 680, 520);
        }
        else if (customArray10[i] == customArray10[2]){
          ctx4.fillText(value, 550, 520);
        }
        else{
        ctx4.fillText(value, x, 520);
        x += ctx4.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }
      
      let k = 440; // Initial X position
  
      for (let i = 0; i < customArray12.length; i++) {
        let fontSize = fitTextWithinWidth(customArray12[i], maxWidth);
        ctx4.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray12[i];
        if(customArray12[i] == customArray12[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 260, 640);
        }
        else if (customArray12[i] ==customArray12[5]){
          ctx4.fillText(value, 900, 640);
        }
        else if (customArray12[i] ==customArray12[4]){
          ctx4.fillText(value, 800, 640);
        }
        else if (customArray12[i] ==customArray12[3]){
          ctx4.fillText(value, 680, 640);
        }
        else if (customArray12[i] == customArray12[2]){
          ctx4.fillText(value, 550, 640);
        }
        else{
        ctx4.fillText(value, k, 640);
        k += ctx4.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }


      x= 440
      for (let i = 0; i < customArray13.length; i++) {
        let fontSize = fitTextWithinWidth(customArray13[i], maxWidth);
        ctx4.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray13[i];
        if(customArray13[i] == customArray13[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 260, 760);
        }
        else if (customArray13[i] ==customArray13[5]){
          ctx4.fillText(value, 900, 760);
        }
        else if (customArray13[i] ==customArray13[4]){
          ctx4.fillText(value, 800, 760);
        }
        else if (customArray13[i] ==customArray13[3]){
          ctx4.fillText(value, 680, 760);
        }
        else if (customArray13[i] == customArray13[2]){
          ctx4.fillText(value, 550, 760);
        }
        else{
        ctx4.fillText(value, x, 760);
        x += ctx4.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }


      x= 440
      for (let i = 0; i < customArray14.length; i++) {
        let fontSize = fitTextWithinWidth(customArray14[i], maxWidth);
        ctx4.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray14[i];
        if(customArray14[i] == customArray14[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 260, 880);
        }
        else if (customArray14[i] ==customArray14[5]){
          ctx4.fillText(value, 900, 880);
        }
        else if (customArray14[i] ==customArray14[4]){
          ctx4.fillText(value, 800, 880);
        }
        else if (customArray14[i] ==customArray14[3]){
          ctx4.fillText(value, 680, 880);
        }
        else if (customArray14[i] == customArray14[2]){
          ctx4.fillText(value, 550, 880);
        }
        else{
        ctx4.fillText(value, x, 880);
        x += ctx4.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }

      x= 440
      for (let i = 0; i < customArray15.length; i++) {
        let fontSize = fitTextWithinWidth(customArray15[i], maxWidth);
        ctx4.font = fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray15[i];
        if(customArray15[i] == customArray15[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 260, 1000);
        }
        else if (customArray15[i] ==customArray15[5]){
          ctx4.fillText(value, 900, 1000);
        }
        else if (customArray15[i] ==customArray15[4]){
          ctx4.fillText(value, 800, 1000);
        }
        else if (customArray15[i] ==customArray15[3]){
          ctx4.fillText(value, 680, 1000);
        }
        else if (customArray4[i] == customArray4[2]){
          ctx4.fillText(value, 550, 1000);
        }
        else{
        ctx4.fillText(value, x, 1000);
        x += ctx4.measureText(value).width + 70; // Adjust the Y position as needed
        }
      }
  
      // Display customArray11 horizontally
      x = 1440; // Reset X position
      ctx4.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < customArray11.length; i++) {
        let fontSize = fitTextWithinWidth(customArray11[i], maxWidth);
        ctx4.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = customArray11[i];
        if(customArray11[i] == customArray11[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 1240, 520);
        }
        else if (customArray11[i] ==customArray11[3]){
          ctx4.fillText(value, 1670, 520);
        }
        else if (customArray11[i] == customArray11[2]){
          ctx4.fillText(value, 1540, 520);
        }
        else{
        ctx4.fillText(value, x, 520); // Adjust the Y position as needed
        x += ctx4.measureText(value).width + 80;
        }
      }


      // Display customArray5 horizontally
      x = 1440; // Reset X position
      ctx4.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar5.length; i++) {
        let fontSize = fitTextWithinWidth(cstar5[i], maxWidth);
        ctx4.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar5[i];
        if(cstar5[i] == cstar5[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 1240, 640);
        }
        else if (cstar5[i] ==cstar5[3]){
          ctx4.fillText(value, 1670, 640);
        }
        else if (cstar5[i] == cstar5[2]){
          ctx4.fillText(value, 1540, 640);
        }
        else{
        ctx4.fillText(value, x, 640); // Adjust the Y position as needed
        x += ctx4.measureText(value).width + 80;
        }
      }

      // Display customArray5 horizontally
      x = 1440; // Reset X position
      ctx4.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar6.length; i++) {
        let fontSize = fitTextWithinWidth(cstar6[i], maxWidth);
        ctx4.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar6[i];
        if(cstar6[i] == cstar6[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 1240, 760);
        }
        else if (cstar6[i] ==cstar6[3]){
          ctx4.fillText(value, 1670, 760);
        }
        else if (cstar6[i] == cstar6[2]){
          ctx4.fillText(value, 1540, 760);
        }
        else{
        ctx4.fillText(value, x, 760); // Adjust the Y position as needed
        x += ctx4.measureText(value).width + 80;
        }
      }

      // Display customArray5 horizontally
      x = 1440; // Reset X position
      ctx4.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar7.length; i++) {
        let fontSize = fitTextWithinWidth(cstar7[i], maxWidth);
        ctx4.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar7[i];
        if(cstar7[i] == cstar7[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 1240, 880);
        }
        else if (cstar7[i] ==cstar7[3]){
          ctx4.fillText(value, 1670, 880);
        }
        else if (cstar7[i] == cstar7[2]){
          ctx4.fillText(value, 1540, 880);
        }
        else{
        ctx4.fillText(value, x, 880); // Adjust the Y position as needed
        x += ctx4.measureText(value).width + 80;
        }
      }

      maxWidth = 55;
      // Display customArray5 horizontally
      x = 1440; // Reset X position
      ctx4.font = 'normal 32px "Bebas Neue", sans-serif';
      for (let i = 0; i < cstar8.length; i++) {
        let fontSize = fitTextWithinWidth(cstar8[i], maxWidth);
        ctx4.font = 'normal ' + fontSize + 'px "Bebas Neue", sans-serif';
        const value = cstar8[i];
        if(cstar8[i] == cstar8[0]){
          ctx4.font = '30px "Bebas Neue", sans-serif';
          ctx4.fillText(value, 1240, 1000);
        }
        else if (cstar8[i] ==cstar8[3]){
          ctx4.fillText(value, 1670, 1000);
        }
        else if (cstar8[i] == cstar8[2]){
          ctx4.fillText(value, 1540, 1000);
        }
        else{
        ctx4.fillText(value, x, 1000); // Adjust the Y position as needed
        x += ctx4.measureText(value).width + 80;
        }
      }
    } else {
      alert('Please select a background image for the Fourth canvas first.');
    }
  }

  document.getElementById('downloadButton4').addEventListener('click', () => {
    const canvas4 = document.getElementById('canvas4');
    const downloadLink4 = document.createElement('a');
    downloadLink4.href = canvas4.toDataURL();
    downloadLink4.download = 'canvas4.png';
    downloadLink4.click();
  });
  
  