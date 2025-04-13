alert("Hello, world!");

function makeBigger()
{
    document.getElementById("enter-text").style.fontSize = "24pt";
}

function changeStyle()
{
    let textArea = document.getElementById("enter-text");

    if (document.getElementById("fancy").checked) 
    {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else if (document.getElementById("boring").checked) 
    {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify()
{
    let textArea = document.getElementById("enter-text");
    let text = textArea.value.toUpperCase();
    let sentence = text.split(".");

    for (let i = 0; i < sentence.length - 1; i++)
    {
        let word = sentence[i].trim().split(" ");

        if (word.length > 0 && word[0] !== "")
        {
            word[word.length - 1] += "-Moo";
            sentence[i] = word.join(" ");
        }
    }

    textArea.value = sentence.join(". ");
}
