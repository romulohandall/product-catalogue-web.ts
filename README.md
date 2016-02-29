## Product Catalogue Web

Example application built in Angular2/Typescript which is connected to Contentful's
read-only demo space "Product Catalogue".

For a more custom experience the app can be connected to a user controlled space so the 
interaction between content editing and rendering can be demoed.

### Usage for rendering only

- Clone or fork this repository
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to `http://localhost:8080`

### Usage to connect a user controlled space
- prepare a Contentful demo space
    - create a new space from the product catalogue template
    - create an api key for the management API
    - from the running example app on `http://localhost:8080`
        - click the samll gauge icon in the lower right corner to open the settings dialogue
        - paste in your API key and space ID
        - click connect and / or save the deeplink for your convenience
        - enjoy

### Known Issues
- none