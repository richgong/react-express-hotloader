# React Express Hotloader

I know there's a lot of boilerplate examples, but it was actually kinda hard to find this exact combination:

* React
* Express server
* Auto-reloading Express server (only in development)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader) (version 3) running on Express (only in development)
* Babel for both React frontend **and** Express backend
* EJS templates

Hence, I made this.

This is a "universal JavaScript" web-server. But, this is isn't a "complete universal React" app, because:

* No server-side rendering
* No react-router
* No redux
* No webpacking minifier for client-side JavaScript includes

I didn't include those things because I think they introduce a lot more complexity for people who are just trying to get started. This is more geared towards building something fast, not building a monolithic React SPA.

### Install and run

In development:

```
npm install
npm start
```

In production:

```
npm install --production
npm run build
npm run serve
```

## Authors

* [Richard Gong](http://richgong.com)

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) file for details
