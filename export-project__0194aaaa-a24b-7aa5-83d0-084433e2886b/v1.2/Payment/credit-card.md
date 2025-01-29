---
title: "Credit Card"
slug: "credit-card"
excerpt: ""
hidden: false
createdAt: "Fri Nov 08 2024 17:33:18 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Nov 26 2024 16:41:13 GMT+0000 (Coordinated Universal Time)"
---
## Front-end

### Step 1. Include the antifraud script in your HTML

Include the command below inside the <head> and <body> tags

```javascript Html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Form</title>
      <script type=“text/javascript” src=“https://h.online-metrix.net/fp/tags.js?org_id=k8vif92e&session_id=adiq_br2dd470e0-698f-4ae4-bf31-71ccd33970dd”></script>
   </head>
   <body>
      <noscript>
         <iframe style=“width: l00px; height: l00px; border: O; position:absolute top: -5000px;” src=“https://h.online-metrix.net/fp/tags.js?org_id=k8vif92e&session_id=adiq_br2dd470e0-698f-4ae4-bf31-71ccd33970dd”></iframe>
      </noscript>
   </body>
</html>
```

The sessionId field must be a UUID (Universally Unique Identifier) concatenated with the prefix adiq_br.

The generated UUID must also be sent later in the antifraudToken field. This ensures consistency between the session tracking and the anti-fraud mechanisms, allowing for accurate validation and monitoring.

### Step 2. Generate a Secure Card Token

Tokenizing a credit card is the process of replacing sensitive card information, such as the card number (PAN), CVV, and expiration date, with a secure, unique identifier known as a token. This token is generated in a way that it cannot be reverse-engineered to reveal the original card details. Tokens are specific to a merchant or transaction, making them unusable if intercepted. This process enhances security, reduces fraud risks, and helps businesses comply with payment industry standards by ensuring that sensitive card data is not stored or transmitted directly.

[Read how to tokenize a Card](ref:tokenize-card)

```javascript Html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Form</title>
      <script type=“text/javascript” src=“https://h.online-metrix.net/fp/tags.js?org_id=k8vif92e&session_id=adiq_br2dd470e0-698f-4ae4-bf31-71ccd33970dd”></script>
   </head>
   <body>
      <noscript>
         <iframe style=“width: l00px; height: l00px; border: O; position:absolute top: -5000px;” src=“https://h.online-metrix.net/fp/tags.js?org_id=k8vif92e&session_id=adiq_br2dd470e0-698f-4ae4-bf31-71ccd33970dd”></iframe>
      </noscript>

      <h1>Payment Form</h1>
      <form id="paymentForm">
         <div>
            <h2>Credit Card Information</h2>
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="card.number" required>
            <label for="holderName">Cardholder Name:</label>
            <input type="text" id="holderName" name="card.holderName" required>
            <label for="expMonth">Expiration Month:</label>
            <input type="number" id="expMonth" name="card.expMonth" min="1" max="12" required>
            <label for="expYear">Expiration Year:</label>
            <input type="number" id="expYear" name="card.expYear" min="24" required>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="card.cvv" required>
         </div>
         <button type="submit">Submit</button>
      </form>
      <script>
         document
           .getElementById('paymentForm')
           .addEventListener('submit', async (event) => {
             event.preventDefault();
         
             // Collect form data
             const formData = new FormData(event.target);
             const card = {
               number: formData.get('card.number'),
               holderName: formData.get('card.holderName'),
               expMonth: formData.get('card.expMonth'),
               expYear: formData.get('card.expYear'),
               cvv: formData.get('card.cvv')
             };
         
             try {
               // Call the route to generate the token
               const tokenResponse = await fetch('https://api.sqala.tech/core/v1/card-vaults?publicKey={YOUR PUBLIC KEY}', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(card),
               });
         
               if (!tokenResponse.ok) throw new Error('Error generating token');
               const { token } = await tokenResponse.json();
         
               // Call the route to create the payment
               const paymentResponse = await fetch('/yourBackend/createPayment', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({ token }),
               });
         
               if (!paymentResponse.ok) throw new Error('Error creating payment');
               const paymentResult = await paymentResponse.json();
               alert('Payment created successfully! ID: ' + paymentResult.paymentId);
             } catch (error) {
               alert(error.message);
             }
           });
      </script>
   </body>
</html>
```

## Back-end

### Step 1. Create an Access Token

Get started by creating an Access Token. [Read how to create an Access Token](ref:authentication)

### Step 2. Create a Credit Card Payment

[Read how to create a Credit Card](ref:create-credit-card) 

```javascript
import fetch from 'node-fetch'

const response = await fetch('https://api.sqala.tech/core/v1/credit-card-payments', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'POST',
    body: JSON.stringify({
        amount: 990, // amount in cents
      	installments: 1,
        operation: 'AUTH_AND_CAPTURE',
      	payer: {
          name: 'Bruce Wayne',
          taxId: '22585694003',
          email: 'bruce.wayne@wayneenterprises.com',
          mobile: '5521975378941',
          address: {
              street: 'Mountain Drive',
              number: '107',
              neighborhood: 'Gotham Financial District',
              city: 'Gotham',
              state: 'New Jersey',
              country: 'US',
              postalCode: '10007'
          }
        },
      	antifraudToken: '58d43ce9-595b-46b9-bdc0-c0a001bfceb5',
      	cardToken: 'eyJpdiI6IjczZDRmNTQ4YTA5ZDAxZmZlYTRlMDM5Y2MwOWRiNTFhIiwiY2lwaGVydGV4dCI6IjliODFkNjg1YmZlMmMwNWE3ZTYzNmE0NzYwOWQwZGI1ODZlMTQ1ZmZkOWJmYjQ1ZmQxZmY4Njk3YTFiYTE5ZTQ5ODUzMjllOCIsInRpbWVzdGFtcCI6MTczMjEyODYzOTI0Nywic2FsdCI6ImE3YWYxMmUxMGEzZjJiZmEzNDQ3ZWIyOGE3ZmYwY2RjIiwiYXV0aFRhZyI6ImI0NzZmNjZlMDQ4NTJlN2VkYTYxZjA4OGFjZTU4OGRiIn0='
    })
})

const data = await response.json()

console.log(data)
```

ouput

```json
{
   "id":"1dd3b87f-cfe5-4a5e-a5c2-3d2b0fc03407",
   "code":"d16cf0cd-ccaf-443c-a67b-6d8678130ef5",
   "method":"CREDIT_CARD",
   "amount":990,
   "paidAmount":990,
   "installments":1,
   "softDescriptor":null,
   "authCode":"395617",
   "transactionId":"020048142011141855330001375914270000000000",
   "payer":{
      "id":"8900d7a4-9e32-4aff-b44b-3538cff6d49c",
      "name":"Bruce Wayne",
      "taxId":"22585694003",
      "email":"bruce.wayne@wayneenterprises.com",
      "mobile":"5521975378941",
      "address":{
         "id":"8900d7a4-9e32-4aff-b44b-3538cff6d49c",
         "street":"Mountain Drive",
         "number":"107",
         "complement":null,
         "neighborhood":"Gotham Financial District",
         "city":"Gotham",
         "state":"New Jersey",
         "country":"US",
         "postalCode":"10007"
      }
   },
   "card":{
      "id":"de9672dc-4e97-40cc-aea5-11ed43bb80a1",
      "firstSixDigits":"488662",
      "lastFourDigits":"6261",
      "holderName":"BRUCE WAYNE",
      "brand":"VISA",
      "expMonth":8,
      "expYear":2029
   },
   "status":"PAID",
   "createdAt":"2024-11-17T23:02:24.951Z",
   "processedAt":"2024-11-17T23:02:24.951Z",
   "paidAt":"2024-11-17T23:02:24.951Z",
   "refundReason":null,
   "refundedAt":null,
   "failedAt":null,
   "metadata":[
      {
         "name":"CUSTOM_FIELD_NAME",
         "value":"CUSTOM_FIELD_VALUE"
      }
   ]
}
```

### Step 3. Create an Endpoint to receive the Webhooks

You can create an endpoint directly in the [developer area](https://developer.sqala.tech/pt-BR/apps) and select which events you want to receive.
