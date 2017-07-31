# Product catalogue web application

This is an example application built in [Angular](https://angular.io/). In the default setup the app gets content from the Contentful read-only [Product Catalogue Space Template][https://www.contentful.com/blog/2015/01/30/introducing-space-templates/]. Our example applications for [iOS][https://github.com/contentful/product-catalogue-ios] and [Android][https://github.com/contentful/product-catalogue-android] happen to use the same space template as well.

## What is Contentful

[Contentful][https://www.contentful.com] is a content management platform for web applications, mobile apps and connected devices. It allows you to create, edit & manage content in the cloud and publish it anywhere via powerful API. Contentful offers tools for managing editorial teams and enabling cooperation between organizations.

![Screenshots of Product Catalogue Web demo App](./screenshot.ong "Screenshots")

## Getting started

The real benefit of the app is the capability to connect it to any space which uses the [Product Catalogue Space Template][https://www.contentful.com/blog/2015/01/30/introducing-space-templates/]. Once the app is connected to a user-controlled version of the Product Catalogue Space Template, all changes to the space in [the Contentful UI][https://app.contentful.com] will be reflected in the app.

- Clone or fork this repository
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to `http://localhost:4200`

### Use this example with your own space

1. Prepare a Contentful demo space
    - Create a new space in https://app.contentful.com
    - **IMPORTANT**: make sure to create it from the Product Catalogue Space Template
2. open `src/app/contentful.service.ts``
3. add your `space` and your CDA access token to the `CONFIG` object

![Screenshots of Product Catalogue Web demo App](./contentful.png "Contentful in action")

### Links

There are other implementations of the product catalogue demo available for iOS and Android

[Product Catalogue for iOS][https://github.com/contentful/product-catalogue-ios]
[Product Catalogue for Andorid][https://github.com/contentful/product-catalogue-android]

This is a project created for demo purposes and not officially supported. Report problems via the issues page but please don't expect a quick and prompt response.