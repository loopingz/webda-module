import {
  Service
} from 'webda';

export default class MyService extends Service {
  init() {

  }

  static getModda() {
    return {
      "uuid": "MyCompany/MyService",
      "label": "MyService",
      "description": "Implements a service",
      "webcomponents": [],
      "logo": "images/icons/dynamodb.png",
      "documentation": "https://raw.githubusercontent.com/loopingz/webda/master/readmes/Store.md",
      "configuration": {
        "default": {
          "table": "table-name",
        },
        "widget": {
          "tag": "myservice-configurator",
          "url": "elements/services/webda-dynamodb-configurator.html"
        },
        "schema": {
          type: "object",
          properties: {
            "someprop": {
              type: "string"
            }
          },
          required: ["someprop"]
        }
      }
    }
  }
}

export { MyService };