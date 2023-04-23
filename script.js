console.log("hi");
// Get the element with id="defaultOpen" and click on it
const userSelect = {
  wall: "White",
  wallColor: "#e8e8e9",
  roof: "Light Blue",
  roofColor: "#93a5aa",
  door: "White",
  doorColor: "#e8e8e9"
}

function changeSummary() {
  //Build summary options
  document.getElementById('option-wall').innerText = userSelect.wall;
  document.getElementById('wall-color').style.background = userSelect.wallColor;

  document.getElementById('option-roof').innerText = userSelect.roof;
  document.getElementById('roof-color').style.background = userSelect.roofColor;

  document.getElementById('option-door').innerText = userSelect.door;
  document.getElementById('door-color').style.background = userSelect.doorColor;
}
window.onload = function() {
  changeSummary()
  // Code that relies on the page being fully loaded goes here
  document.getElementById("defaultOpen").click();
  // Do something with the element
  const btnPDF = document.getElementById('btnPDF'); //button to download pdf

  
  /**
   * DOWNLOAD PDF BUTTON
   */

  

  btnPDF.addEventListener("click", ()=>{
    
    btnPDF.style.display= "none";
    
    const element2print = document.createElement("div");
    const imgContainer = document.getElementById('image-container');
    const copyImg = imgContainer.cloneNode(true);

    const element = document.getElementById('element-to-print');
    const copyElement = element.cloneNode(true);

    element2print.appendChild(copyImg);
    element2print.appendChild(copyElement);

    var opt = {
      margin: 5,
      filename: 'hosue.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 5},
      jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
      };

      // New Promise-based usage:
      html2pdf().set(opt).from(element2print).save();
      btnPDF.style.display = "block";
      })

      const btnWallColor1 = document.getElementById("wall-color1")
      const btnWallColor2 = document.getElementById("wall-color2")
      const btnWallColor3 = document.getElementById("wall-color3")
  
      const btnRoofColor1 = document.getElementById("roof-color1")
      const btnRoofColor2 = document.getElementById("roof-color2") 
      const btnRoofColor3 = document.getElementById("roof-color3")

      const btnDoorColor1 = document.getElementById("door-color1")
      const btnDoorColor2 = document.getElementById("door-color2")
      const btnDoorColor3 = document.getElementById("door-color3")

      const imgWall = document.getElementById("imgWall")
      const imgRoof = document.getElementById("imgRoof")
      const imgDoor = document.getElementById("imgDoor")
      activeColor("wall-color",btnWallColor1)
      activeColor("roof-color", btnRoofColor1)
      activeColor("door-color", btnDoorColor1) 
      
      // Color buttons
  
      btnWallColor1.addEventListener("click",()=>{
        imgWall.src = "images/wall_1_w.png";
        userSelect.wall = "White"
        userSelect.wallColor = "#e8e8e9"
        changeSummary()
        activeColor("wall-color",btnWallColor1)
      })
      btnWallColor2.addEventListener("click", () => {
        imgWall.src = "images/wall_2_hg.png";
        userSelect.wall = "Harbor Grey"
        userSelect.wallColor ="#b4b4b1"
        activeColor("wall-color",btnWallColor2)
        changeSummary()
      })
  btnWallColor3.addEventListener("click", () => {
    imgWall.src = "images/wall_3_dg.png";
    userSelect.wall = "Dark Grey"
    userSelect.wallColor = "#6e6e6e"
    activeColor("wall-color", btnWallColor3)
    changeSummary()
  })

      btnRoofColor1.addEventListener("click", () => {
        imgRoof.src = "images/roof_1_lb.png";
        userSelect.roof = "Light Blue"
        userSelect.roofColor = "#93a5aa"
        changeSummary()
        activeColor("roof-color",btnRoofColor1)
      })
      btnRoofColor2.addEventListener("click", () => {
        imgRoof.src = "images/roof_2_dg.png";
        userSelect.roof = "Dark Grey"
        userSelect.roofColor = "#828283"
        changeSummary()
        activeColor("roof-color",btnRoofColor2)
      })
    btnRoofColor3.addEventListener("click", () => {
      imgRoof.src = "images/roof_3_d.png";
      userSelect.roof = "Black"
      userSelect.roofColor = "#4c4c4d"
      changeSummary()
      activeColor("roof-color", btnRoofColor3)
    })

  btnDoorColor1.addEventListener("click", () => {
    imgDoor.src = "images/door_1_w.png";
    userSelect.door = "White"
    userSelect.doorColor = "#e8e8e9"
    changeSummary()
    activeColor("door-color", btnDoorColor1)
  })
  btnDoorColor2.addEventListener("click", () => {
    imgDoor.src = "images/door_2_g.png";
    userSelect.door = "Gray"
    userSelect.doorColor = "#9a9a9b"
    changeSummary()
    activeColor("door-color", btnDoorColor2)
  })
  btnDoorColor3.addEventListener("click", () => {
    imgDoor.src = "images/door_3_b.png";
    userSelect.door = "Blue"
    userSelect.doorColor = "#7f8791"
    changeSummary()
    activeColor("door-color", btnDoorColor3)
  })
    };

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

function activeColor(activTab,evt) {
  // Declare all variables
  var i, colorBox;

  // Get all elements with class="tabcontent" and hide them
  colorBox = document.getElementsByClassName(activTab);
  for (i = 0; i < colorBox.length; i++) {
    colorBox[i].style.borderStyle = "none";   
  }
  evt.style.borderStyle = "solid"
  evt.style.borderColor = "white"
}
