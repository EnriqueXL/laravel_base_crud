<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>


Pasos para instalar este proyecto correctamente:

descarga este proyecto o clónalo.

ejecutar el comando:
composer install

copiar el archivo ".env.example" y pegarlo con el nombre: ".env". Si estas con el sistema gitforwindows, o en linux o mac, puedes ejecutar el siguiente comando:
cp .env.example .env

debemos generar una nueva llave de laravel con el siguiente comando:
php artisan key:generate

Configura la nueva base de datos modificando el archivo ".env":
DB_CONNECTION=mysql DB_HOST=127.0.0.1 DB_PORT=3306 DB_DATABASE= DB_USERNAME= DB_PASSWORD=

ejecuta php artisan migrate

ejecuta npm install && npm run dev

si te da problemas, hazlo por separado npm install npm run dev

ejecuta php artisan serve y prueba el proyecto que debe funcionar.
