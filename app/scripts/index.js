var codes = document.querySelectorAll('code');

[].forEach.call(codes, function(code) {
  hljs.highlightBlock(code);
});


var words = ['Trump', 'ignorance', 'racism', 'hypocrisy', 'stupidity'];
var trumpSpan = document.querySelector('.trump-span');
var index = 0;
function startWords(){
  setInterval(function(){

    var word  = words[index];
    trumpSpan.innerHTML = word;
    trumpSpan.setAttribute('data-word', index);
    document.body.setAttribute('data-word', index);

    index = ( (index + 1)  >= words.length) ? 0 : index + 1;
  }, 1500);
}

setTimeout(startWords, 1000);
