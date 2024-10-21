const instance = new Mark(document);

highlightAllText();

const area = document.getElementById('codeArea')

area.addEventListener('mouseleave', () => {
  highlightAllText();
})

function highlightAllText() {
    instance.unmark();
    
    // Letters
    instance.markRegExp(/a/gi, {className: 'a'});
    instance.markRegExp(/e/gi, {className: 'e'});
    instance.markRegExp(/i/gi, {className: 'i'});
    instance.markRegExp(/o/gi, {className: 'o'});
    instance.markRegExp(/u/gi, {className: 'u'});
    instance.markRegExp(/b/gi, {className: 'b'});
    instance.markRegExp(/c/gi, {className: 'c'});
    instance.markRegExp(/d/gi, {className: 'd'});
    instance.markRegExp(/g/gi, {className: 'g'});
    instance.markRegExp(/f/gi, {className: 'f'});
    instance.markRegExp(/h/gi, {className: 'h'});
    
    // Symbols
    instance.markRegExp(/[']/gi, {className: 'quotation-mark'});
    instance.markRegExp(/["]/gi, {className: 'quotation-mark'});
    instance.markRegExp(/[?]/gi, {className: 'question-mark', caseSensitive: false});
    instance.markRegExp(/[/]/gi, {className: 'slash'});
    instance.markRegExp(/[!]/gi, {className: 'exclamation-mark'});
    
}