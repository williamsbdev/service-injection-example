import Ember from 'ember';
import { injectService, injectRepo } from '../utils/inject';

export default Ember.Object.extend({
  fred: injectService(),
  wat: injectRepo(),

  callService: function() {
    this.get("fred").opinion();
    this.get("wat").invoke();
  }

});
