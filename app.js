// grab inputs
document.getElementById('kgsInput').addEventListener('input', function (e) {
    let kgs = e.target.value;

    //target diff outputs
    document.getElementById('miligramsOutput').innerHTML = kgs/1000000; 

    document.getElementById('centigramsOutput').innerHTML = kgs/100000; 
    
    document.getElementById('gramsOutput').innerHTML = kgs/1000; 

    document.getElementById('tonsOutput').innerHTML = kgs*1000; 
    
    
    

})













