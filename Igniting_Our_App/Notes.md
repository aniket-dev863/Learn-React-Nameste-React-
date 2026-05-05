# Igniting Our App

Not only React there are a lot of other packages and librariew whose orchestration makes our app the most optimal .

### About Packages <br>

There are two types of Dependencies that we are installing : <br>

- Dev Dependecy <br>
- Production Dependency

1. Tilde(~) <br>

- It is more restrictive , allows only minor bug fixes and patches .
- **Example** _~1.2.3_ <br>
  **Allowed** : _1.2.4_ , _1.2.9_ <br>
  **Not Allowed** : _2.0.0_ , _1.3.4_

2. caret(^) <br>

- The caret is the default symbol used by npm when you install a package.
- It allows updates that are backward-compatible, meaning it will update to the latest minor or patch version but will not update to a new major version.
- **Example** _^1.2.3_ <br>
  **Allowed** : _1.2.4_ , _1.3.0_ ,_1.9.9_<br>
  **Not Allowed** : _2.0.0_

#### Important Packages <br>

1. Bundler

- Development tool that binds together all our scattered files - JSX, Js, HTML ,CSS and images - Packages them into small no of of files that our browser can load effeciently .

- create-react-app uses **webpack** as it's Bundler behind the scenes .

2. Parcel

- It is Dev Dependency , which we are using as a Bundler in out react app .

- command used : _npm install -D parcel_ .

- -D beacuase it's a Dev Dependency .

- _npx parcel index.html_ means to invoke / execute our parcel here .

- Dev-Build

- HMR (Hot Module Replacement)
- Parcel uses a File Watching Algorithm to Do HMR . File Watching Algorithm is written in CPP.

- Faster Build Experience using caching our files - uses parcel-cache

- Image Optimization

- Minifiy and compress our file in our Production Builds .

- Bundlers are responsible to make react fast .

- Consistent Hasing

- Differetial Bundling -- Written in C++ . (Supports Older Browsers) .
- Tree Shaking - remove unused code for you .
- HTTPS - ssl build
- create separte Dev and production Builds
- Development Builds are kept in the dist folder .
- Read Parcel Documents [Parcel Docs](https://parceljs.org/docs/)
