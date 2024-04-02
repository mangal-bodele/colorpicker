import './cp.css'


function ColorPicker() {
      function changColorPicked (){
        let r = document.querySelector('#red').value
        let g = document.querySelector('#green').value
        let b = document.querySelector('#blue').value

        let colorPicked = document.querySelector('#colorPicked')
        colorPicked.style.background = `rgb( ${r},${g},${b})`

        let colorPickedRgb = document.querySelector('#colorPickedRgb')
        colorPickedRgb.innerHTML = `rgb( ${r},${g},${b})`
      
      }


      return (
        <div id='head'>
          <h3 >--ColorPicker</h3>
          <div id='colorPicked' style={{background:'rgb(0,0,0)'}}></div>
          <p id= 'colorPickedRgb'>rgb(0,0,0)</p>

          r:<input type='range' id='red' defaultValue='0' min='0' max='255' onInput={changColorPicked}/>
          g:<input type='range' id='green' defaultValue='0' min='0' max='255' onInput={changColorPicked}/>
          b:<input type='range' id='blue' defaultValue='0' min='0' max='255' onInput={changColorPicked}/>
          
        </div>
      );
    }
    export default ColorPicker;