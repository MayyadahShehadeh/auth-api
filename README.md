# auth-api

### Author : Mayyadah Shehadeh

- tests report

- front-end

#### Setup
**.env requirements:**

  * PORT - 3000

**Running the app**
  * npm start
  * Endpoints: 

   - /signup
      * Returns Object

>{
>
>"username": "fred",
>
>"password":"1234",
>
>"role":"admin"
>
>}

   - /signin
      * Returns Object

>{
>
>"username": "fred",
>
>"password":"1234",
>
>}


  - /api/v1/food
  - /api/v2/food (with permissions)
      * Returns Object

>{
>
> "name": ""apple",
>
>"calories": "20",
>
>"type": "fruit"
>
>}
 
 
  - /api/v1/clothes
  - /api/v2/clothes (with permissions)
      * Returns Object

>{
>
> "name": "dress",
>
>"color":"red",
>
>"size": "s"
>
>}


**Tests**

- Unit Tests: npm run test
- Lint Tests: npm run lint

