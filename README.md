# Phone Catalog

## `Description`
Phone Catalog is a web app that displays a list of phones. When you click on any of them you can see extra information (apart from the image and the phone name) including a description, some specs and the price. All this information is taken from a local REST API. While the API request is ongoing the web shows a spinner letting the user know that the web is actually working. Additionally, this app is responsive so that it can look good both in phones and computers. You can choose between ordering the phones both in ascending or descending alphabetical order. You can aswell search for a phone name in the search bar. 

![phone-catalog-home](https://user-images.githubusercontent.com/78595379/140080615-441844d1-cea7-4bc3-8ec9-5a2cbe155036.PNG)
![phone-pop-up](https://user-images.githubusercontent.com/78595379/140080892-d746345e-2c8e-48dc-b15d-8905f60fc8a1.PNG)
![search](https://user-images.githubusercontent.com/78595379/140081197-23099cae-9154-4619-87bd-23461a276915.PNG)

## `Run it`
In order to run the web app follow this steps:
1. Download the zip
2. Unzip the download directory
3. Open the terminal and navigate to the project (make sure to get to the phoneCatalog-main folder wich contains all the code)
4. Execute `npm install`
5. Execute the api: `cd src` -->  `node api.js`
6. Execute the app: `npm start` (in another terminal, having navigated to the main app directory)

However, if you prefer it, you can directly access the non API version here: https://phonecatalog-react.netlify.app

## `Requirements`

You need to have node installed in your machine. You can downlaod it from: https://nodejs.org/es/download/

