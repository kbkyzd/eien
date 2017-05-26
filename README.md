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

## Queues
The app makes use of `redis` as both a cache and a message queue. So you'll need `Redis` and Laravel's queue worker running for the app to work properly. 

For the most part, all you'll need to do is run `php artisan queue:work` and everything will work.

It's highly recommended that you bare-minimum run `redis` as a cache as it greatly speeds up the bus-query API.

If you really can't get Redis running (or you're just lazy), change the `QUEUE_DRIVER` (in `.env`) to `SYNC` and `CACHE_DRIVER` to `FILE`.

You should seed the database with `php artisan db:seed` (alternatively, do it while migrating with `php artisan migrate --seed`) to get some test data to work with.

## Notifications
The core part of the notification system is [`BusScheduler`](https://github.com/kbkyzd/eien/blob/master/app/Helpers/BusScheduler.php). It gets called by an artisan command, which *should* be automatically run by the Laravel's scheduler (see the documentation; it's essentially a cron job).

`BusScheduler` has various checks in place, so it's fine to "call" the command (`php artisan eien:fetch-eta`) as much as you *want*.

Again, you need to make sure Redis or whatever queue driver you're using is warning. (Read the section about queues).

## Scraped Data and `Storage`
You will need to run `php artisan storage:link` to symlink the paths. Read more about it on Laravel's docs. The raw scraped data can be found at [`storage/app/public`](https://github.com/kbkyzd/eien/tree/master/storage/app/public).

[`Cached`](https://github.com/kbkyzd/eien/blob/master/app/Helpers/Cached.php) provides a wrapper for interacting with the json files. You'll call it whenever you need to read in the data, and it'll fetch it from cache if it exists. If it doesn't, it'll store it first, then return it.

## Logic
Pretty much most of the other logic with regards to map/reducing the data lives in the [`controllers`](https://github.com/kbkyzd/eien/tree/master/app/Http/Controllers) folder.

## Test
`vendor/bin/phpunit`
