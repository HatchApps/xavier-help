---

---
# API

We offer a RESTful API to extract basic data contained within your Xavier account. If you would like to access to the API, please [get in touch](/contact-us.html).

::: warning
 Please note, our API is currently running in BETA phase. It may change in the future.
:::

## Getting Started

The current version of the API lives at: ```https://api.xavier-analytics.com/```

The easiest way to start using our API is by finding an HTTP client online. We would recommend using <a href="https://www.getpostman.com/downloads/">Postman</a>, or <a href="https://paw.cloud/">Paw</a> as they are ready-to-use, free tools.

In our demo we are going to use <a href="https://www.getpostman.com/downloads/">Postman</a>.

<!-- ### Versions:

| Versions        | Release Date   | Changes  |
| ------------- |:-------------:| -----|
| version 1.0 BETA      | 07/01/2020 | Initial deployment | -->

### Endpoints

| Endpoint        | What it does   |
| ------------- |:-------------:| -----|
| ```/clients```| Returns an array with a list of Clients|
| ```/clients/{clientId}```| Returns an array with a specific Client|
| ```/clients/{clientId}/activity-stats```| Returns an array with Activity Stats for a specific Client|

## Authentication

In order to get data out, you must pass an authorization token in the request header:

**Request Header:** ```Authorization: Bearer <your token>```

To generate a token please use the following instructions:

In Xavier head to "Your Settings" and under the API tab generate your token.

![Generate token](./images/api-token.png)

::: warning
Store the token securely and do not share it with anyone else!
:::

For example, to use your token in <a href="https://www.getpostman.com/downloads/">Postman</a>, select _bearer token_ as your authentication method and copy your given token into the correct field. See below:

![Add token](./images/token-postman.png)

## API Calls

### GET /clients
***

Request: ```https://api.xavier-analytics.com/clients```

Response Content Type: *application/JSON*

Response Model:

```json
[
    {
        "id": "string",
        "name": "string",
        "practiceCode": "string",
        "providerId": "string",
        "healthScore": integer
    }
]
```
Example value:

![GET-Clients-Response](./images/clients-response.png)

### GET /clients/{clientId}

***

Request: ```https://api.xavier-analytics.com/clients/{clientId}```

Response Content Type: *application/JSON*

Response Model:

```json
{
    "id": "string",
    "name": "string",
    "providerId": "string",
    "practiceCode": "string",
    "organisationType": "string",
    "healthScore": integer,
    "hmrcStatus": "string",
    "vatNumber": "string",
    "metrics": {
        "debtorBalance": float,
        "avgDebtorDays": integer,
        "oneDayImpact": integer,
    }
}
```
Example value:

![GET-Clients/{clientId}-Response](./images/client-response.png)

### GET /clients/{clientId}/activity-stats

***

Request: ```https://api.xavier-analytics.com/clients/{clientId}/activity-stats```

Response Content Type: *application/JSON*

Response Model:

```json
{
    "annual": {
        "start": "string",
        "end": "string",
        "turnover": float,
        "salesCount": integer,
        "billsCount": integer,
        "creditsCount": integer,
        "manualJournalsCount": integer,
        "bankTransactionsCount": integer,
        "totalCount": integer,
        "turnoverChangeYoY": integer,
        "salesChangeYoY": integer,
        "billsChangeYoY": integer,
        "creditsChangeYoY": integer,
        "manualJournalsChangeYoY": integer,
        "bankTransactionsChangeYoY": integer,
        "totalChangeYoY": integer
    },
    "monthlyAverage": {
        "start": "string",
        "end": "string",
        "turnover": float,
        "salesCount": integer,
        "billsCount": integer,
        "creditsCount": integer,
        "manualJournalsCount": integer,
        "bankTransactionsCount": integer,
        "totalCount": integer,
        "turnoverChangeYoY": integer,
        "salesChangeYoY": integer,
        "billsChangeYoY": integer,
        "creditsChangeYoY": integer,
        "manualJournalsChangeYoY": integer,
        "bankTransactionsChangeYoY": integer,
        "totalChangeYoY": integer
    }
}
```

Example value:

![GET-Clients/{clientId}/activity-stats-Response](./images/activity-stats-response.png)

## Response Codes

### 200 - OK
Indicates that the client's request was accepted successfully.

### 404 - Not found
The 404 error status code indicates that the API can't map the client's URI to a resource.

### 500 - Internal Server Error
500 is the generic API server side error response. Please [contact](/contact-us.html) our support team.
