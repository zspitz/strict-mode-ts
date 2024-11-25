# React Strict Mode Samples

Uses TypeScript + React (obviously) + Vite

Has a number of components to help explain exactly what StrictMode does.

* `GeoData` - shows the basic problem: code runs after component has refreshed (although StrictMode doesn't help here)
* `TeaSet` - storing external data that is modified after each render
* `StoryTray` - affecting objects/arrays passed in as props
* `IntervalCounter` - Effects-code remaining after render

Component re-render can be triggered by toggling the theme with the button at the top of the page.

Component mount/unmount can be triggered using the checkbox.

To install:

`npm i`

To run:

`npm run dev`
