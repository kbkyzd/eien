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
Copy .env.dev to .env

* Nginx + PHP-FPM
* MariaDB (MySQL should work)
* Any *nix should do fine (tested with FreeBSD, Windows and WSL)

Works on XAMPP as well, but beware of the usual issues (CA.pem not being linked, missing extensions)

## Building
* `git clone https://github.com/kbkyzd/eien.git`
* `composer install`
* `yarn`
* `npm run watch` or `npm run dev`

## Tests
`vendor/bin/phpunit`
