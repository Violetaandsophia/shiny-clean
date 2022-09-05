const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/a green circle with a white woman inside.png') {
    myImage.setAttribute('src','images/green-circle.png');
  } else {
    myImage.setAttribute('src','images/green-circle.png');
  }
}
let myButton = document.querySelector('button');
myButton.onclick = () => {
    setUserName();
  }
let myHeading = document.querySelector('h1');
  function setUserName() {
    const myName = prompt('Violeta Dimitrova');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('Violeta Dimitrova', myName);
      myHeading.textContent = `Shiny clean, ${myName}`;
    }
}
