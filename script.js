let y = document.getElementById('lyric');
let text = '';

for (let x = 1; x < 100; x++) {

    if (x === 1) {
        text += `${x} bottle of beer on the wall <br>`; 
    } else {
        text += `${x} bottles of beer on the wall <br>`;  
    }
    
    y.innerHTML = text;
}