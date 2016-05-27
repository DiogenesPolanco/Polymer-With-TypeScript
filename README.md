![](http://dm.gl/assets/typescriptLogo.png)
![](https://camo.githubusercontent.com/7dba0f0fdb21d326d79a22d9ae753ac59e015a76/68747470733a2f2f7777772e646172746c616e672e6f72672f706f6c796d65722f696d616765732f706f6c796d65722d6c6f676f2e737667)

## Polymer With TypeScript

> A starting point for building web applications with Polymer and TypeScript

### Included out of the box:

* [Generator Polymer TS](https://www.npmjs.com/package/generator-polymerts) is a Yeoman Generator for PolymerTS
* [PolymerTS](https://github.com/nippur72/PolymerTS) write Polymer elements as TypeScript @decorated classes
* [Polymer](https://www.polymer-project.org/), [Paper](https://elements.polymer-project.org/browse?package=paper-elements), [Iron](https://elements.polymer-project.org/browse?package=iron-elements) and [Neon](https://elements.polymer-project.org/browse?package=neon-elements) elements
* [Material Design](http://www.google.com/design/spec/material-design/introduction.html) layout
* Routing with [Page.js](https://visionmedia.github.io/page.js/)
* Unit testing with [Web Component Tester](https://github.com/Polymer/web-component-tester)
* Optional offline setup through [Platinum](https://elements.polymer-project.org/browse?package=platinum-elements) Service Worker elements
* End-to-end Build Tooling (including [Vulcanize](https://github.com/Polymer/vulcanize))
* [Recipes](/docs/README.md/) for ES6 support, Polymer performance, using Visual Studio Code, Deploying to GitHub Pages, Deploying to Firebase, and Mobile Chrome Apps

### Demo
See latest Polymer with TypeScript Demo (from master).

### Tutorials

Check out the Polymer with TypeScript tutorials on [Solvex Dominicana](http://www.solvex.com.do/blog):

* [Set up the PSK](https://www.polymer-project.org/1.0/docs/start/psk/set-up.html)
* [Create a page](https://www.polymer-project.org/1.0/docs/start/psk/create-a-page.html)
* [Generate Typescript from Element](https://www.npmjs.com/package/generator-polymerts#element-alias-el)
* [Deploy the PSK to the web](https://www.polymer-project.org/1.0/docs/start/psk/deploy.html)

## Getting Started

To take advantage of Polymer With Typescript you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.

### Install dependencies

#### Quick-start (for experienced users)

With Node.js installed, run the following one liner from the root of your Polymer With Typescript download:

```sh
npm install -g gulp bower && npm install && bower install
```

#### Prerequisites (for everyone)

The full starter kit requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- gulp, a Node.js-based build tool.
- bower, a Node.js-based package manager used to install front-end packages (like Polymer).

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `gulp` and `bower` globally.

```sh
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4)  Install the starter kit's local `npm` and `bower` dependencies.

```sh
cd polymer-starter-kit && npm install && bower install
```

This installs the element sets (Paper, Iron, Platinum) and tools the starter kit requires to build and serve apps.

### Development workflow

#### compile TypeScript

```sh
gulp compile-ts
```
#### clean TypeScript

```sh
gulp clean-ts
```

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes vulcanization, image, script, stylesheet and HTML optimization and minification.

## Application Theming & Styling

Polymer 1.0 introduces a shim for CSS custom properties. We take advantage of this in `app/styles/app-theme.html` to provide theming for your application. You can also find our presets for Material Design breakpoints in this file.

[Read more](https://www.polymer-project.org/1.0/docs/devguide/styling.html) about CSS custom properties.

### Styling
1. ***main.css*** - to define styles that can be applied outside of Polymer's custom CSS properties implementation. Some of the use-cases include defining styles that you want to be applied for a splash screen, styles for your application 'shell' before it gets upgraded using Polymer or critical style blocks that you want parsed before your elements are.
2. ***app-theme.html*** - to provide theming for your application. You can also find our presets for Material Design breakpoints in this file.
3. ***shared-styles.html*** - to share styles between elements and index.html.
4. ***element styles only*** - styles specific to element. These styles should be inside the `<style></style>` inside `template`.

  ```HTML
  <dom-module id="my-list">
    <template>
      <style>
        :host {
          display: block;
          background-color: yellow;
        }
      </style>
      <ul>
        <template is="dom-repeat" items="{{items}}">
          <li><span class="paper-font-body1">{{item}}</span></li>
        </template>
      </ul>
    </template>
  </dom-module>
  ```

These style files are located in the [styles folder](app/styles/).

## Unit Testing

Web apps built with Polymer With Typescript come configured with support for [Web Component Tester](https://github.com/Polymer/web-component-tester) - Polymer's preferred tool for authoring and running unit tests. This makes testing your element based applications a pleasant experience.

[Read more](https://github.com/Polymer/web-component-tester#html-suites) about using Web Component tester.

## Dependency Management

Polymer uses [Bower](http://bower.io) for package management. This makes it easy to keep your elements up to date and versioned. For tooling, we use npm to manage Node.js-based dependencies.

Components installed by Bower live in the `app/bower_components` directory. This location is specified by the `.bowerrc` file. Many projects which follow Yeoman conventions place the `bower_components` directory outside of the `app` directory and then mount it using a server. This causes problems for tools like [Vulcanize](https://github.com/polymer/vulcanize) and [web-component-shards](https://github.com/PolymerLabs/web-component-shards) which rely on relative paths. We've chosen to simplify things and have `bower_components` live inside of `app` to resolve these issues.

## Deploy

### Github Pages

1. Uncomment this line  `// app.baseUrl = '/Polymer With Typescript/';` in app.js near the top.
2. Change `app.baseUrl = '/Polymer With Typescript/';`  to `app.baseUrl = '/your-pathname/';`.
3. Run `gulp build-deploy-gh-pages` from command line.
4. To see changes wait 1-2 minutes then load Github pages for your app.

[See continuous deployment using GIT in Azure App Service](https://azure.microsoft.com/en-us/documentation/articles/web-sites-publish-source-control)
