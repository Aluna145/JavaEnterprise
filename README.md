# Statictics: Name Informator!
###  Description
Find information about your name:
 1. Enter a name
 2. See results: the top countries where is your name most often found

## API

 - [Gender API](https://gender-api.com)

## SIMPLE USAGE
##### This is the easiest way to request a gender determination. Each response is JSON encoded.
[Documentation](https://gender-api.com/en/api-docs)

**REQUEST:**
```
GET https://gender-api.com/get?name=Diana&key=<your private server key>
```
| Field | Type | Description |
|--|--|--|
| name |String | Name to query |
| key|String|Your private server key|

**RESPONCE:**
```
{"name":"diana","name_sanitized":"Diana","gender":"female","samples":523,"accuracy":93,"duration":"41ms","credits_used":1}
```
| Field | Type | Description |
|--|--|--|
| name |String | Submitted name in lower case |
| name_sanitized|String|The name after we applied our normalizer to it|
| gender |String|Possible values: male, female, unknown|
| samples|Integer|Number of records found in our database which match your request|
| accuracy|Integer|This value determines the reliability of our database. A value of 100 means that the results on your gender request are 100% accurate|
| duration|String|Time the server needed to process the request|
| credits_used|Integer|The amount of credits used for this query|