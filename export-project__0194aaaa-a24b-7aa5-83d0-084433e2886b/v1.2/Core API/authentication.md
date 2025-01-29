---
title: "Authentication"
slug: "authentication"
excerpt: ""
hidden: false
createdAt: "Mon Jun 06 2022 14:02:56 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sat Oct 05 2024 21:30:25 GMT+0000 (Coordinated Universal Time)"
---
Your credentials carry many privileges, so be sure to keep them secure! Do not share your credential keys in publicly accessible areas such as GitHub, client-side code, and so forth.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

## Step 1. Request your Credentials

You can get your credentials directly on the developer area in our portal, which is accessed by the user menu on the top left corner of our dashboard or directly on this [URL](https://developer.sqala.tech/apps/endpoints).

When the API requests for user it should be the APP_ID, and when it requests for password it should be the AppSecret.

## Step 2. Create an Access Token

```javascript
import fetch from 'node-fetch'
import { encode } from 'base-64'

const response = await fetch('https://api.sqala.tech/core/v1/access-tokens', {
    headers: { 
      'Authorization': 'Basic ' + encode('YOUR_APP_ID' + ':' + 'YOUR_APP_SECRET'),
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
        'refreshToken': 'YOUR_REFRESH_TOKEN'
    })
})

const data = await response.json()

console.log(data)
```

output

```json
{
  "token": "eyJraWQiOiJwb1NPeDI0VHRmbDZCYjdaZ3RcL296WGpqUzMrTVlkYTNScXdON1dVSXJkbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZjE5MDk0Mi1jMjY5LTQxMjQtOTNkNy01YTdmYTkwMTQ0YzkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuc2EtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3NhLWVhc3QtMV82eWdMcFJLMGUiLCJjbGllbnRfaWQiOiIyNXQwOGxwaHYwN2IzZnZqZ2FqcTNsczFrcCIsIm9yaWdpbl9qdGkiOiIzZWZjODY1Yi01MzU2LTQwNWMtOTQxYy1iNmExM2I3ODFhNWYiLCJldmVudF9pZCI6ImMyMTM1NjgzLWY3YTUtNGMxYy04MzUzLWM3MTUyNmQ2NDU5YyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ4MTY3OTgsImV4cCI6MTY1NDgyMDUyNCwiaWF0IjoxNjU0ODE2OTI0LCJqdGkiOiI2ZmVhODZiNC1kNDVmLTRhOGQtYjEwYi1iOWRhNzkzODQyZmQiLCJ1c2VybmFtZSI6ImNhcmxvc3BlY2FuaGEyQG91dGxvb2suY29tIn0.PfKd8rpnq9xPO3IwSRkDuBDx0VjN41ABKvm0xIybNCxWh5N1b7HZsTPxjh6GiDoHWYnr8_HCzXqk0MQXYHt7ybHKIFPKqOaA4VpBrb-WaazwSAGdTJFt3grZb4KP-ab2gKaYMji9x1l_SDAaEU-frEHErOnJwyMPi1dn2pZAKJMp4p7IIctwYTFITokP4Lqn7amy_PHlsXoNlUPV0BoNBrFFq-sp22NXSdDtIsdSkyRlGqlOHNTd2zMNqqKCFx3lBt1dPfm6gPvx_mwlOiT0icAXwUOsXxi22P5HgEoh3HJw2NneP9xC8Mw1BQvhBdmfnmANQzIHWkFfBMCQo3xF5w",
  "expiresIn": 3600,
  "type": "Bearer"
}
```

## Step 3. Send Requests

```javascript
import fetch from 'node-fetch'

const response = await fetch('https://api.sqala.tech/core/v1/pix-qrcode-payments', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
        amount: 990
    })
})
```
