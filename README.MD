# getir-case-study

Heroku URL : http://getir-case-study.herokuapp.com


## Endpoints

**url :** `/records`  
**method :** `POST`  
**request params :** 

|  Name | Type  | Description  |
|---|---|---|
|  startDate | string | Start date of records (YYYY-MM-DD) |
|  endDate | string | End date of records (YYYY-MM-DD) |
| minCount  | integer | Minimun Sum of the “count”  |
| maxCount  | integer | Maximum Sum of the “count”  |


**response codes :** 

|  code | Description  |
|---|---|
| -1 | The server encountered an unexpected condition which prevented it from fulfilling the request|
|  0  | Success |
|  1  | Used when the requested resource is not found, whether it doesn't exist |
|  2  | Request parameter required |
|  3  | Request parameter date formats [YYYY-MM-DD] validation |




### Example 

**request json**
```json
{
  "startDate": "2017-02-21", "endDate": "2020-02-22","minCount": 10 , "maxCount": 501
}
```

**response :**
```json
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "UFdJGdXB7xKO9d5m",
            "createdAt": "2017-02-21T08:38:38.742Z",
            "totalCount": 400
        },
        {
            "key": "vpt8ilnm7RXqxSEw",
            "createdAt": "2017-02-21T09:33:03.230Z",
            "totalCount": 500
        },
        {
            "key": "mL9549H14o3xZ5aL",
            "createdAt": "2017-02-21T18:08:31.515Z",
            "totalCount": 100
        }
    ]
}
```

## Run (Docker Compose)
```
$ git git@github.com:melihtsever/getir-case-study.git
$ cd getir-case-study
docker-compose -f "docker-compose.yml" up -d --build
```

## Run (DEV)
```
$ git git@github.com:melihtsever/getir-case-study.git
$ cd getir-case-study
$ npm install
$ npm run dev
```

## Run Test
```
$ npm test
```



Local URL
```
http://localhost:3000/
```
