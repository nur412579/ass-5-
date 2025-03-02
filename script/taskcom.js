document.getElementById("btn-1-pa").addEventListener('click', function(){
    const numBercounter = document.getElementById('btn-conector').value;
    const numBerconvertedEliment = parseFloat(numBercounter);

    if (numBerconvertedEliment===numBercounter) {
        const sum = numBerconvertedEliment + 1;
        document.getElementById('btn-conector').innerText = sum;
    }
    else{

    }
})