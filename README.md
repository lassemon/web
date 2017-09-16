# web livereload demos

#### pre-install
- install node
  - https://nodejs.org/
- install yarn *(or use npm)*
  - https://yarnpkg.com/en/
- install global gulp
  - `$ yarn global add gulp@latest`

### Installation
`$ yarn install`

### builing app
`$ gulp`
*(builds development version of app)*

### Starting http server
`$ gulp serve`
*(server at localhost:8080)*

### Server logic
The `gulp` build builds the development version under ./.tmp folder and `gulp serve`
creates a node server that serves the index.html file from that folder.

Production build in progress..
