import Ember from 'ember';

export default Ember.Mixin.create({
  fred: Ember.inject.service(),

  dadOpinion: function() {
    this.get("fred").opinion();
  }
});
