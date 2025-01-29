---
title: "The Card object"
slug: "the-card-object"
excerpt: ""
hidden: false
createdAt: "Sun Nov 17 2024 23:40:19 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sat Nov 23 2024 19:37:51 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**code** string(36)  
_Unique identifier for the object in your system._

***

**firstSixDigits** string(6)  
_The first six digits of the credit card._

***

**lastFourDigits** string(4)  
_The last four digits of the credit card._

***

**holderName** string(64)  
_The holderName field represents the name of the credit card owner as it appears on the card._

***

**brand** string(16)  
_The brand field indicates the credit card network or provider, such as Visa, Mastercard, or American Express._

***

**expMonth** number  
_The expMonth field represents the expiration month of the credit card, formatted as a two-digit number (e.g., “01” for January)._

***

**expYear** number  
_The expYear field represents the expiration year of the credit card, formatted as a two-digit number (e.g., “24”)._

***

**metadata** [Metadata](ref:metadata)  
_Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format._

## Example

```json
{
   "id":"de9672dc-4e97-40cc-aea5-11ed43bb80a1",
   "code": "c046b9a5-b7cf-449a-9bc8-121b500b4dfc",
   "firstSixDigits":"488662",
   "lastFourDigits":"6261",
   "holderName":"BRUCE WAYNE",
   "brand":"VISA",
   "expMonth":8,
   "expYear":29,
   "metadata": [
      {
        "name": "CUSTOM_FIELD_NAME", 
        "value": "CUSTOM_FIELD_VALUE"
      }
    ]
}
```
