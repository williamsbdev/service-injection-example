import Ember from "ember";

var Wat = Ember.Object.extend({
    invoke: function() {
        console.log("working?");
    }
});

export default Wat;
