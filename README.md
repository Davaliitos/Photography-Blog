By Fernando Dávalos

Instructions:
# Photography-Blog

Photography-Blog is a simple page that is responsive, and adapts to different types of Apple Devices.

## Installation

1. Clone this repository locally.

2. Install composer dependencies using 

```bash
composer install
```

3. Create copy of .env file

```bash
cp .env.example .env
```

4. Generate app encryption key 'php artisan key:generate'

```bash
php artisan key:generate
```

5. Install dependencies using 

```bash
npm install
```

6. Start your server using

```bash
php artisan serve
```

7. Start your client-server using

```bash
npm run watch
```

8.Navigate to app in a Google Chrome or Mozilla Firefox (http:localhost:8000)

9. Enjoy!

I used the following technologies: Laravel, Html, CSS, Vuejs

# NOTE

There is a bug with webpack. Sometimes it fails to load the moude 'postcss-loader'. If that happens, comment line 120 in the Home.vue file, then save, remove the comment and save again, the page should now show without any problem.

## Requirements

Build an web page that is responsive depending of the resolution of the browser.
