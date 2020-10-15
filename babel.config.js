module.exports = {
  "env": {
    // Node 端编译成 ES6
    "node": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "modules": false,
            "targets": {
              "node": "current"
            }
          }
        ]
      ],
      "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import"
      ]
    },
    // web 端 编译成 ES5
    "web": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "modules": false,
            "targets": {
              "browsers": [
                "last 2 versions",
                "safari >= 7"
              ]
            }
          }
        ]
      ],
      "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-object-assign"
      ]
    }
  },
  "comments": false
}
