# mobility-hacks.de website
---

## Quickstart

* Requires installed NodeJS

```bash
npm install
npm run start
open http://localhost:8080
```

## Infos

* [Stage](http://stage.mobility-hacks.de/)
* You can find the mocks here: https://marvelapp.com/15chihf
* And here is the Trello board for organising: https://trello.com/b/Kf4aPWQr/berlin-hackathon-website

## TechStack

- npm as packager manager
- Webpack for building
- react
- skeleton.css for grid & reset

## Building
Master/Live:
[![Build Status](https://travis-ci.org/hackerstolz/mobilityhacks-website.svg?branch=master)](https://travis-ci.org/hackerstolz/mobilityhacks-website)

Stage/Dev:
[![Build Status](https://travis-ci.org/hackerstolz/mobilityhacks-website.svg?branch=dev)](https://travis-ci.org/hackerstolz/mobilityhacks-website)

```bash
npm run build
```

## Deployment

The site will be deployt on every push to master.

* ``dev`` branch goes to stage.mobility-hacks.de
* ```master`` goes to prod --> mobility-hacks.de

## Live reloading & dev

```bash
npm run start
```

## Inspiration

Loading effects: [Demo](http://tympanus.net/Development/GridLoadingEffects/)

Resposive font size: [Blog post](http://madebymike.com.au/writing/precise-control-responsive-typography/)

How should the fonts be loaded? [Blog post](https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/)

OffCanvas: https://www.codementor.io/reactjs/tutorial/how-to-build-a-sliding-menu-using-react-js-and-less-css

Loading effects: http://michalsnik.github.io/aos/