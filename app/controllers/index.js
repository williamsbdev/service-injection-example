import Ember from 'ember';
import lamont from '../mixins/lamont';
import grady from '../models/grady';

export default Ember.Controller.extend(lamont, {
  strange: new grady(),

  actions: {
    sayIt: function() {
      this.dadOpinion();
    },

    sayItAgain: function() {
      this.get("strange").callService();
    }
  }
});
