### How to install

1. Drag to `ryerlint` file to `application` folder
2. Install local file as dev dependency
   > `npm i -D ./ryerlint`
3. Add the plugin to `.eslintrc`

```json
{
  "plugins": ["ryerlint"],
  "rules": {
    "ryerlint/styled-component-scope": "error" // error | warn
  }
}
```

4. Refresh vscode window
5. Run lint command
   > `npm run lint`
