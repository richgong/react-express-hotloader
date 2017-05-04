# React Express Hotloader

I know there's a lot of boilerplate examples, but it was actually kinda hard to find this exact combination:

* ReactJS
* ExpressJS server
* Auto-reloading Express server (only in development)
* React hotloader running on Express (only in development)
* Babel for both React frontend and Express backend
* EJS templates

Hence, I made this.

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
