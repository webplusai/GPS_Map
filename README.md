# challenge

Consider a vehicle location tracking system that allows tracking data to be retrieved in a binary file format.

each binary tracking data file contains 5 minutes of tracking data.

For the challenge 6 files were provided

develop a front-end application that loads and parses the data from the tracking files, and
presents it to the end user.

To use the following commands npm and node are required.

## Project setup

```
npm install
```

**Remember add a google maps api key in a .env file**

```
VUE_APP_MAPS_API_KEY=<API_KEY>
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for local production

```
npm run build
npm instal -g http-server
http-server dist
```

**To upload in a server, ensure that binary files are accessible.**

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
