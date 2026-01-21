const xhr = new XMLHttpRequest();
console.log("1")
xhr.onload = function () {
console.log("2")
    if (xhr.status === 200) {
        console.log("3")
        const data = JSON.parse(xhr.responseText);
        const glyphs = data.glyphs;
        const container = document.getElementById("cards");
        
        glyphs.forEach(glyph => {
            const card = document.createElement("div");
            //add a className "card" to the card variable
            card.className = "card";
            
            let godsHTML = "";

            for (let i = 0; i < glyph.gods.length; i++) {
                godsHTML +=   glyph.gods[i]  ;
            }
            
            card.innerHTML = `
                <h2>
                ${glyph.name}
                </h2>
                <p><span class="label">[${glyph.tier}] [${godsHTML}] [${glyph.myth}]
                [${glyph.type}] [${glyph.effect}]
                </span>
                </p>
                <p><span class="label">${glyph.quote}</span>
                
                </p>
                <p><span class="label">${glyph.ability}</span>
                
                </p>`;

            container.appendChild(card); //variables go into those spots
            
        });
    }
};

xhr.open("GET", "glyph.json"); //make sure your json file is named glyph.json in VSCode
xhr.send();
console.log("4")