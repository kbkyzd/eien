<p align="center"><img src="https://raw.githubusercontent.com/kbkyzd/eien/master/public/img/KBKYZDx600.png"></p>

<p align="center">Eien, A final year project.</p>
<p align="center"><a href="https://travis-ci.org/kbkyzd/eien"><img src="https://img.shields.io/travis/kbkyzd/eien.svg?style=flat-square" alt="Build Status"></a></p>


## Core Dependencies
* PHP >7.0
* MariaDB/MySQL
* [Laravel 5.4 PHP Requirements](https://laravel.com/docs/5.4#installation)
* Composer
* Yarn (Optional, but recommended)
* Redis

## Development
* Nginx + PHP-FPM
* MariaDB (MySQL should work)
* Any *nix should do fine (tested with FreeBSD, Windows and WSL)

Works on XAMPP as well, but beware of the usual issues (CA.pem not being linked, missing extensions)

* Copy .env.dev to .env
* Run `php artisan key:generate`
* Fill in .env with your own settings (All of them are pretty self-explanatory)

## Building
* `git clone https://github.com/kbkyzd/eien.git`
* `composer install`
* `yarn`
* `npm run dev`

## Running
The app makes use of `redis` as both a cache and a message queue. So you'll need `Redis` and Laravel's queue worker running for the app to work properly. 
For the most part, all you'll need to do is run `php artisan queue:work` and everything will work.
It's highly recommended that you bare-minimum run `redis` as a cache as it greatly speeds up the bus-query API.

If you really can't get Redis running (or you're just lazy), change the `QUEUE_DRIVER` (in `.env`) to `SYNC` and `CACHE_DRIVER` to `FILE`.

## Tests
`vendor/bin/phpunit`
