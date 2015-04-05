import Fred from "../services/fred";
import Wat from "../repos/wat";

export function initialize(container, application) {
    application.register("service:fred", Fred);
    application.register("repos:wat", Wat);
}

export default {
    name: "services",
    initialize: initialize
};
