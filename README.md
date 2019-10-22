# RAILS URL SHORTENER FRONT-END README

This readme is the basic requirements and setup guide to run this application in your location development environment.

#### Requirements:

* A local dev environment with Yarn installed and setup

#### Basic Setup Instructions:

1. Clone the directory: 

    ```
    $ git clone https://github.com/AdamFreemer/url_shortener_front-end.git
    ```
    
2. Navigate in your console into the app directory

3. `$ yarn install`

#### Running the Application:

1. In your first window, run the rails server: 

    ```
    $ yarn start
    ```

#### Using the Application

1. To create a short url link in your browser:
    
    * Copy / paste a URL from your browser into the "Enter your URL" field.
    * Click "Create Short URL".
    * A short-link to the new URL will appear below the URL field.
    * The link will automatically be added to the top 100 URL list below.
    * The title of the URL will be fetched in the background and updated upon retrieval (this may take a second or two).
    * If the title of your URL is longer than 75 characters, it will be truncated on the top 100 URL list.
    * It may take up to a 20-30 seconds to spin up the front-end if it is in a dormant state on Heroku.
    * Once the front-end spins up, "loading..." will be shown until the back-end spins up.


