
# Project Title

Yoga registration form simply a webapp that allows a user to register for monthly classes they will
be paying the fees on a month on month basis.

https://yoga-fontend.vercel.app/
## Run Locally

Clone the project

```
git clone https://github.com/parijat965/Yoga-app-Flexmoney-assingment.git
```
Go to the project directory
```
cd server
```
Install dependencies
```
npm i
```
Start the server
```
npm run dev
```
Go to the project directory
```
cd client
```
Install dependencies
```
npm i
```
Start the client
```
npm run dev
```



## Authors

- [@parijat965](https://github.com/parijat965)


## API Reference

#### Register fresh user

```http
  POST /api/v1/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.  |
| `fname` | `string` | **Required**.  |
| `lname` | `string` | **Required**.  |
| `age` | `number` | **Required**.  |
| `gender` | `string` | **Required**.  |
| `batch` | `string` | **Required**.  |

#### Payment

```http
  POST /api/v1/payment
```
#### Change Batch

```http
  POST /api/v1/change
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.  |
| `batch` | `string` | **Required**.  |



## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![NodeJs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## Workflow
- user have to register first with credentials
  like email,firstname,lastname,age,gender,and choose batch.
- The monthly fee is 500/- Rs INR.an individual will have to pay the fees
   every month and he can pay it any time of the month.  
-  There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
   participants can choose any batch in a month and can move to any other batch next
   month. I.e. participants can shift from one batch to another in different months but in
   same month they need to be in same batch.

## Documentation
This Yoga registration app is client side rendering single phase application.
The website is devloped with latest technologies.For frontend React.js,html,scss are being used and in the backend part 
made with node.js. For database realtional database mySql is used.I used Object realtional mapping(ORM) to address, access and manipulate objects without having to consider how those objects relate to their data sources.
Prisma is used as ORM to connect backend with database.I have used also MomentJS it is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.




## Feedback

If you have any feedback, please reach out to us at parijatghosh2@gmail.com

