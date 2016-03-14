var codes = document.querySelectorAll('code');

[].forEach.call(codes, function(code) {
  hljs.highlightBlock(code);
});
