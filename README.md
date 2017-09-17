# web livereload demos

## live site http://web.viitekehys.net/

#### pre-install
- install node
  - https://nodejs.org/
- install yarn *(or use npm)*
  - https://yarnpkg.com/en/
- install global gulp
  - `$ yarn global add gulp@latest`

### Installation
`$ yarn install`

### Development build
`$ gulp`
*(builds development version of app)*

### Starting http server
`$ gulp serve`
*(server at localhost:8080)*

### Production build
```
$ gulp dist
$ gulp serve-dist
```

### Build logic
The `gulp` build builds the development version under ./.tmp folder and `gulp serve` creates a node server that serves the index.html file from that folder.

The `gulp dist` build builds the production version under ./dist folder and `gulp serve-dist` creates a node server that serves the index.html file from that folder.
