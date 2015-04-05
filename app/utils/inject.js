import Ember from "ember";
import Fred from "../services/fred";
import Wat from "../repos/wat";

var injectService = function(name) {
    return Ember.computed(function(propertyName) {
        var objectName = name || propertyName;
        var registry = new Ember.Registry();
        var container = registry.container();
        registry.register("service:fred", Fred);
        return container.lookup("service:" + objectName);
    });
};

var injectRepo = function(name) {
    return Ember.computed(function(propertyName) {
        var objectName = name || propertyName;
        var registry = new Ember.Registry();
        var container = registry.container();
        registry.register("repos:wat", Wat);
        return container.lookup("repos:" + objectName);
    });
};

export { injectService, injectRepo };
