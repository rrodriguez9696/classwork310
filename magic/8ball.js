var words = [
             'No',
             'Defintely not',
             'As I see it, no',
             'Most likely .. Not',
             'Signs points to no',
             'Ask again later',
             'Better not tell you',
             'My repy is no',
             'My sources say no',
             'concentrate and ask again'
             ];

var getRandomWord = function() {
    return words[math.floor(Math.Random() * words.length)];
};

(function() {('.eball').mouseenter(function(){
    ('.textbox').html(getRandomWord());
    });

});