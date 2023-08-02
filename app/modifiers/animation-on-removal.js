import { modifier } from 'ember-modifier';

export default modifier(function animationOnRemoval(
  element,
  [],
  { shouldRemove, removeTS }
) {
  console.log('hello');
  if (shouldRemove) {
    element.classList.add('fade-out');
  }
});
