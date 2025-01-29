---
title: "The Period object"
slug: "the-period-object"
excerpt: ""
hidden: true
createdAt: "Thu Nov 07 2024 13:40:12 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Nov 07 2024 14:51:57 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**interval** enum **required**  
_Payment method used in charge the customer._

| Type    | Description                   |
| :------ | :---------------------------- |
| `DAY`   | Represents a daily interval   |
| `MONTH` | Represents a monthly interval |
| `YEAR`  | Represents a yearly interval  |

***

**count** integer **required**  
_Payer's name._

***

## Example

```json
{
  "interval": "DAY",
  "count": 2
}
```
