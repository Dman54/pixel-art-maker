const app = () => {
    //const colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkGrey","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","Goldenrod","Gray","Green","GreenYellow","Grey","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightGrey","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

    const colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    let fakeColor = colours.white;
    window.addEventListener('load', () => {
        const canvas = document.querySelector('.canvas');
        const ui = document.querySelector('.ui');
        const sizeEl = document.querySelector('.size');
        const curColor = document.querySelector('.curColor');
        const save = document.querySelector('.save');
        const load = document.querySelector('.load');
        const undo = document.querySelector('.undo');
        const viewJson = document.querySelector('.viewJson');
        const JSONText = document.querySelector('.JSON');
        const instruments = document.querySelectorAll('.curColorP .instr');
        let Fill = false;
        instruments[0].classList.add('b');
        let MouseIsDown = false;
        let lastImageCopy;

        instruments.forEach(element => {
            element.addEventListener('click', (e) => {
                if(e.target.classList.contains('b')) return;
                e.target.classList.toggle('b');
                if (e.target == instruments[0]) {
                    Fill = false;
                    instruments[1].classList.toggle('b');
                } else {
                    Fill = true;
                    instruments[0].classList.toggle('b');
                }
                console.log(Fill);
            });
        });
        viewJson.addEventListener('click', (e) => {
            JSONText.innerHTML = JSON.stringify(gridToObject());
            JSONText.classList.toggle('dnone');
            if(JSONText.classList.contains('dnone')) {
                viewJson.textContent = 'view JSON';
            } else {
                viewJson.textContent = 'close JSON';
            }
        });
        load.addEventListener('click', (e) => {
            makeCopy();
            // const saved = localStorage.getItem('canvasDrawExample');
            // if (saved) {
            //     canvas.innerHTML = saved;
            // }
            const savedImage = localStorage.getItem('savedImage');
            if (savedImage) {
                loadPicFromObject(localStorage.getItem('savedImage'));
            }
        });
        save.addEventListener('click', (e) => {
            let json = JSON.stringify(gridToObject());
            localStorage.setItem('savedImage', json);
            //localStorage.setItem('canvasDrawExample', canvas.innerHTML);
        });
        undo.addEventListener('click', (e) => {
            loadPicFromObject(lastImageCopy);
        });

        function makeCopy() {
            lastImageCopy = JSON.stringify(gridToObject());
        }
        function gridToObject() {
            let image = {'size':size, 'cells':[]};
            let cells = canvas.querySelectorAll('div');
            for (cell of cells) {
                image.cells.push(cell.style.backgroundColor);
            }
        
            return image;
        }
        function loadPicFromObject(obj) {
            try {
                let image = JSON.parse(obj);
                if (image.size === null) throw false;
                sizeEl.value = image.size;
                size = +image.size;
                updateTextInput(size);
                drawAll();
                let cells = canvas.querySelectorAll('div');
                for (const [index, value] of cells.entries()) {
                    value.style.backgroundColor = image.cells[index];
                }
            } catch(e) {
                alert('Wrong save format');
            }
        }

        function listToMatrix(elementsPerSubArray) {
            let cells = canvas.querySelectorAll('div');
            let matrix = [], i, k;
        
            for (i = 0, k = -1; i < cells.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }
        
                matrix[k].push(cells[i]);
            }
        
            return matrix;
        }
        function fill(e) {
            canvas_2d = listToMatrix(size);
            let x = e.target.getAttribute('x');
            let y = e.target.getAttribute('y');
            let startColor = e.target.style.backgroundColor;
            // let fillColor;
            // if (e.which == 1) fillColor = colorLeftBtn;
            //     else if (e.which == 3) fillColor = colorRightBtn;
            floodFill(y, x, startColor, fakeColor);
        }
        
        function floodFill(x, y, startColor, fillColor) {
            x = parseInt(x);
            y = parseInt(y);
            if (fillColor == startColor) return;
            if (canvas_2d[x][y].style.backgroundColor != startColor) return;
            canvas_2d[x][y].style.backgroundColor = fillColor;
            if (y+1 <= size-1) floodFill(x, y+1, startColor, fillColor);
            if (y-1 >= 0) floodFill(x, y-1, startColor, fillColor);
            if (x+1 <= size-1) floodFill(x+1, y, startColor, fillColor);
            if (x-1 >= 0) floodFill(x-1, y, startColor, fillColor);
        }

        Object.values(colours).forEach(color => {
            const colorEl = document.createElement('div');
            colorEl.style.backgroundColor = color;
            ui.appendChild(colorEl);
        });
        ui.addEventListener('click', (e) => {
            if(e.target == ui) return;
            fakeColor = e.target.style.backgroundColor;
            curColor.value = rgbToHex(fakeColor);
        });
        curColor.addEventListener('change', (e) => {
            fakeColor = e.target.value;
        });
        document.addEventListener('mouseup', (e) => {
            MouseIsDown = false;
            window.getSelection().removeAllRanges();
        });
        size = +sizeEl.value;
        const drawAll = () => {
            while (canvas.firstChild) {
                canvas.removeChild(canvas.firstChild);
            }
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    const div = document.createElement('div');
                    div.setAttribute('x', j);
                    div.setAttribute('y', i);
                    canvas.appendChild(div);

                    div.addEventListener('mousedown', (e) => {
                        makeCopy();
                        if(Fill) {
                            fill(e);
                        } else {
                            MouseIsDown = true;
                            e.target.style.backgroundColor = fakeColor;
                        }
                    });
                    div.addEventListener('mouseenter', (e) => {
                        if(Fill) return;
                        if(MouseIsDown) { //&& e.which == 1
                            e.target.style.backgroundColor = fakeColor;
                        }
                    });
                }
                const br = document.createElement('br');
                canvas.appendChild(br);
            }
        };
        drawAll();
        sizeEl.addEventListener('change', () => {
            size = +sizeEl.value;
            drawAll();
        });
    });
};

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}

function rgbToHex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

app();