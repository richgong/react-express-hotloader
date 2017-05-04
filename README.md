# React Express Hotloader

I know there's a lot of boilerplate examples, but it was actually kinda hard to find this exact combination:

* ReactJS
* ExpressJS server
* Auto-reloading ExpressJS server
* Hotloader running on ExpressJS in localdev, but not in production
* Babel for both React frontend and ExpressJS backend
* EJS templates

Hence, I made this.

### Install and run

On localhost:

```
npm install
npm start
```

In production:

```
npm install --production
npm run build # builds all the react files
npm run serve
```

## Authors

* **Richard Gong** - [my website](http://richgong.com)

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) file for details
