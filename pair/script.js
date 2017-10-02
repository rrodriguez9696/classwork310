function show() {
    var array1 = ["a concept","a book","a movie","a song", "an app"];
    var array2 = ["a dog","clowns","Donald Trump","BMCC","sea monsters"];
    var array3 = ["magnificent","disgusting","scary","gigantic","super bad"];
    var array4 = ["cities","hamsters","women","water","keyboards"];
    var array5 = ["pencils","nothing","everything","clothes","ballons"];
    
    var a = Math.floor(Math.random()*array1.length);
    var b = Math.floor(Math.random()*array2.length);
    var c = Math.floor(Math.random()*array3.length);
    var d = Math.floor(Math.random()*array4.length);
    var e = Math.floor(Math.random()*array5.length);
    
     document.getElementById('design').innerText = array1[a];
     inspired.innerText = array2[b];
     thatis.innerText = array3[c];
     through.innerText = array4[d];
     using.innerText = array5[e];

}
show();