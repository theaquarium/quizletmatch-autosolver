document.addEventListener('keypress', function () {
  let terms = Quizlet.matchModeData.terms;
  let boxes = document.getElementsByClassName('MatchModeQuestionGridTile-text');
  let elements = {};

  for(let i = 0; i < boxes.length; i++) {
    let element = boxes.item(i);
    let text = element.children.item(0).innerHTML;

    if (text) {
      elements[text] = element;
    }
  }

  terms.forEach(term => {
    let word = elements[term.word];
    let definition = elements[term.definition];

    if (word && definition) {
      word.parentElement.parentElement.dispatchEvent(new PointerEvent('pointerdown'));
      definition.parentElement.parentElement.dispatchEvent(new PointerEvent('pointerdown'));
    }
  });
});
