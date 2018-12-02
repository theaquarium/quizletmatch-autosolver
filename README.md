# Quizlet Match Auto-Solver

## Preface
Kids on Quizlet sets I use have gotten match scores of below one second, which annoys me. Therefore, I have written my own hack for it.

## Directions
1. Open the Quizlet match landing page (the one with the *Start game* button).
2. Switch to micromatch mode (url ending in `/micromatch`) or cover most of the page with the inspector so that tile mode is used instead of scatter.
2. Open the inspector (dev tools) and open the console.
3. Paste the code (below) into the console and run it.
5. Click on the *Start game* button.
6. Once the timer reaches your desired score, press any key.

## Code
```javascript
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
```
## Notes
- It appears that scores below 0.5 seconds cannot be obtained, with an error message stating that *"We couldn't save your score"*.

## License
Licensed under the MIT license, see the `LICENSE` file.
