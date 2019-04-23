const app = () => {
    const colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkGrey","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","Goldenrod","Gray","Green","GreenYellow","Grey","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightGrey","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    let fakeColor = colors[144];
    window.addEventListener('load', () => {
        const canvas = document.querySelector('.canvas');
        const ui = document.querySelector('.ui');
        const sizeEl = document.querySelector('.size');
        const curColor = document.querySelector('.curColor');
        colors.forEach(color => {
            const colorEl = document.createElement('div');
            colorEl.style.backgroundColor = color;
            ui.appendChild(colorEl);
        });
        ui.addEventListener('click', (e) => {
            if(e.target == ui) return;
            fakeColor = e.target.style.backgroundColor;
            curColor.style.backgroundColor = fakeColor;
        });
        canvas.addEventListener('click', (e) => {
            if(e.target == canvas) return;
            e.target.style.backgroundColor = fakeColor;
        });
        size = +sizeEl.value;
        console.log(size);
        const drawAll = () => {
            while (canvas.firstChild) {
                canvas.removeChild(canvas.firstChild);
            }
            for (let i = 0; i < size; i++) {
                for (let i = 0; i < size; i++) {
                    const div = document.createElement('div');
                    canvas.appendChild(div);
                }
                const br = document.createElement('br');
                canvas.appendChild(br);
            }
        };
        drawAll();
        sizeEl.addEventListener('change', () => {
            //size = +e.target.value;
            size = +sizeEl.value;
            drawAll();
        });
    });
};

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}

app();