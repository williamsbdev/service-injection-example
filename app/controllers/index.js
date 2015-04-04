import Ember from 'ember';
import lamont from '../mixins/lamont';

export default Ember.Controller.extend(lamont, {

  actions: {
    sayIt: function() {
      this.dadOpinion();
    }
  }
});
