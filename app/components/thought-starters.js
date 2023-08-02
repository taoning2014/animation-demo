import Component from '@glimmer/component';
import { action } from '@ember/object';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class ThoughtStartersComponent extends Component {
  @tracked
  indexToRemove;

  thoughtStarters = A([
    { title: 'title 1' },
    { title: 'title 2' },
    { title: 'title 3' },
  ]);

  @action
  removeTS(index) {
    this.thoughtStarters.removeAt(index);
  }

  @action
  setRemoveTSIndex(index) {
    debugger;
    this.indexToRemove = index;
  }
}
