---
title: "The Webhook Endpoint object"
slug: "the-webhook-endpoint-object-1"
excerpt: ""
hidden: false
createdAt: "Tue Sep 13 2022 19:41:03 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Jan 20 2025 21:41:14 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**url** string(64)  
_The URL of the webhook endpoint._

***

**description** string(64)  
_An optional description of what the webhook is used for._

***

**events** string\[]  
_The list of events to enable for this endpoint._

***

**secret** string(64)  
_The endpoint’s secret, used to generate webhook signatures._

***

**status** enum  
_The status of the webhook endpoint. Can be `ACTIVE`, `INACTIVE` or `DELETED`._

| Status     | Description |
| :--------- | :---------- |
| `ACTIVE`   |             |
| `INACTIVE` |             |
| `DELETED`  |             |

***

**createdAt** datetime  
_Time at which the object was created._

***

**updatedAt** datetime  
_Time at which the object was updated._

***

**deletedAt** datetime  
_Time at which the object was deleted._

## Example

```json
{
  "id": "ea816523-d73e-4c58-a1c1-2f3c5758a1b7",
  "url": "https://my.back.end/webhooks",
  "description": null,
  "events": [ "payment.paid" ],
  "secret": "62cab3d1aca75122cebbf26769a20b4dc32a33d0131d6c323834e677532ae73a",
  "status": "ACTIVE",
  "createdAt": "2022-06-08T15:02:00Z",
  "updatedAt": null,
  "deletedAt": null,
}
```
