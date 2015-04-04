import Ember from 'ember';
import lamont from '../mixins/lamont';

export default Ember.Object.extend(lamont, {

  callService: function() {
    this.dadOpinion();
  }

});
