### **Assignment 1: JSON Fundamentals**

**Objective:**
To demonstrate your understanding of JSON syntax by creating a valid JSON object from scratch.

**Background:**
You are working on a "To-Do List" application. Your task is to create a JSON object that represents a single to-do item with all its necessary properties.

**Tasks:**
1.  Create a new file named `task.json`.
2.  Inside this file, construct a single JSON object.
3.  The object must have the following key-value pairs:
    *   `id`: A unique number (e.g., `101`).
    *   `taskName`: A string describing the task (e.g., `"Complete JavaScript homework"`).
    *   `isCompleted`: A boolean value (`true` or `false`).
    *   `dueDate`: A string representing a date (e.g., `"2023-10-28"`). If there is no due date, its value should be `null`.
    *   `tags`: An array of strings for categorizing the task (e.g., `["school", "coding", "urgent"]`).
    *   `assignee`: A nested object containing information about who the task is assigned to. This nested object should have two keys:
        *   `name`: A string (e.g., `"Alex Doe"`).
        *   `email`: A string (e.g., `"alex.d@example.com"`).

**Deliverable:**
Submit the `task.json` file. You can use an online JSON validator to check if your syntax is correct before submitting.

---

### **Assignment 2: Working with JSON in JavaScript**

**Objective:**
To practice converting data between JSON strings and JavaScript objects using `JSON.parse()` and `JSON.stringify()`.

**Background:**
Your web application needs to both receive data from a server (as a JSON string) and send data to a server (by converting a JavaScript object into a JSON string).

**Tasks:**
1.  Create a new file named `data_handler.js`.
2.  **Part A: Parsing JSON**
    *   Copy the following JSON string into your file and store it in a variable called `productDataString`.
      ```javascript
      const productDataString = `{
        "productId": "A-4521",
        "productName": "Eco-Friendly Water Bottle",
        "stock": 150,
        "isAvailable": true,
        "specifications": {
          "capacity_ml": 750,
          "material": "Stainless Steel"
        }
      }`;
      ```
    *   Use `JSON.parse()` to convert `productDataString` into a JavaScript object. Store it in a new variable called `productObject`.
    *   Write `console.log()` statements to print the following to the console:
        *   The entire `productObject`.
        *   Just the `productName`.
        *   The material of the product from the nested `specifications` object.

3.  **Part B: Creating a JSON String**
    *   Create a JavaScript object named `userPreferences` with the following properties: `theme` (a string, e.g., "dark"), `notifications` (a boolean), and `fontSize` (a number).
    *   Use `JSON.stringify()` to convert the `userPreferences` object into a JSON string.
    *   `console.log()` the resulting JSON string.

**Deliverable:**
Submit the `data_handler.js` file.

---

### **Assignment 3: Fetching Data from an API (GET Request)**

**Objective:**
To use the `fetch()` API to make a GET request to a public API and handle the asynchronous response using Promises (`.then()`).

**Background:**
You are building a small app that displays a list of comments from a blog. You need to fetch this data from the public **JSONPlaceholder** API.

**Tasks:**
1.  Create a new file named `api_get.js`.
2.  Write a function called `fetchComments()`.
3.  Inside the function, use `fetch()` to make a GET request to the following URL: `https://jsonplaceholder.typicode.com/comments`.
4.  Chain a `.then()` block to the `fetch()` call to handle the response. In this block, check if the response is OK (`response.ok`). If it is, convert the response body to JSON using `response.json()`.
5.  Chain a second `.then()` block to handle the resulting data (the array of comments). Inside this block:
    *   Log the message: `"Total comments received: "` followed by the number of comments in the array.
    *   Loop through the **first 5 comments** in the array and log the `email` of each one.
6.  Chain a `.catch()` block at the end to catch and log any errors that might occur during the fetch operation (e.g., network is down).
7.  Call your `fetchComments()` function at the end of the file to run it.

**Bonus Challenge (Optional):**
Rewrite the `fetchComments` function using `async/await` syntax instead of `.then()` and `.catch()`.

**Deliverable:**
Submit the `api_get.js` file.

---

### **Assignment 4: Handling API Response Status and Headers**

**Objective:**
To inspect the HTTP status code and headers of an API response to build more robust code.

**Background:**
When fetching a specific resource, it might not exist. Your application needs to handle this gracefully instead of crashing. You will write a function that checks if a photo exists on JSONPlaceholder before trying to process it.

**Tasks:**
1.  Create a new file named `api_status.js`.
2.  Write an `async` function called `getPhotoDetails(photoId)`. This function will accept a photo ID as an argument.
3.  Inside the function, use `fetch()` to get data from `https://jsonplaceholder.typicode.com/photos/` followed by the `photoId`.
4.  After fetching, log the following to the console:
    *   The **status code** of the response (e.g., `response.status`).
    *   The value of the `'Content-Type'` header from the response headers.
5.  Add a conditional check:
    *   If the response status is `404`, log the message `"Error: Photo with ID [photoId] not found."` and do not proceed.
    *   If the response status is `200` (or `response.ok` is true), parse the response as JSON and log the `title` of the photo.
6.  Use a `try...catch` block to handle any potential network errors.
7.  Call your function twice at the end of the file to test both scenarios:
    *   `getPhotoDetails(10);` (This should succeed)
    *   `getPhotoDetails(99999);` (This should result in a 404)

**Deliverable:**
Submit the `api_status.js` file.

---

### **Assignment 5: Sending Data to an API (POST Request)**

**Objective:**
To use the `fetch()` API to send data to a server using a `POST` request, correctly configuring the method, headers, and body.

**Background:**
Your application now needs to allow users to create their own posts. You will send a new post object to the JSONPlaceholder API. The API will simulate saving it and will send back the created object with a new `id`.

**Tasks:**
1.  Create a new file named `api_post.js`.
2.  First, create a JavaScript object that represents the new post. Call it `myNewPost`. It must have the following properties:
    *   `title`: A string for the post title.
    *   `body`: A longer string for the post content.
    *   `userId`: A number (e.g., `5`).
3.  Create a function called `submitPost(postObject)`.
4.  Inside this function, use `fetch()` to send the `postObject` to `https://jsonplaceholder.typicode.com/posts`.
5.  To do this, you must provide a second argument to `fetch()`: an `options` object. This object must contain:
    *   `method`: The value should be `'POST'`.
    *   `body`: The `postObject` passed into the function, but it must be converted into a JSON string using `JSON.stringify()`.
    *   `headers`: An object with one key-value pair: `'Content-Type': 'application/json; charset=UTF-8'`.
6.  Handle the response from the server. It will send back the data you posted, plus a new `id`. Convert the response to JSON and log the final object to the console with the message: `"Successfully created post with ID:"` followed by the new ID.
7.  Include a `.catch()` block for error handling.
8.  Call your `submitPost()` function, passing `myNewPost` as the argument.

**Deliverable:**
Submit the `api_post.js` file.
