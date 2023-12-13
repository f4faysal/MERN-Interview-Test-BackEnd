# Drawing API

This API provides endpoints to manage drawings.

## Table of Contents

- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
  - [Get All Drawings](#get-all-drawings)
  - [Get Single Drawing](#get-single-drawing)
  - [Update Drawing](#update-drawing)
  - [Delete Drawing](#delete-drawing)
  - [Create Drawing](#create-drawing)

## Getting Started

To use this API, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/f4faysal/MERN-Interview-Test-BackEnd
   cd https://github.com/f4faysal/MERN-Interview-Test-BackEnd
   ```

2. Install dependencies:

   ```bash
   yarn add
   ```

3. Start the server:
   ```bash
   yarn dev
   ```

The API will be accessible at `https://blackboard-backend.vercel.app/api/v1`.

## Endpoints

### Get All Drawings

**Endpoint:** `/drawings`

**Method:** `GET`

**Description:** Get a list of all drawings.

**Example:**

```bash
 https://blackboard-backend.vercel.app/api/v1/drawings
```

### Get Single Drawing

**Endpoint:** `/drawings/:id`

**Method:** `GET`

**Description:** Get details of a specific drawing by providing its ID.

**Example:**

```bash
 https://blackboard-backend.vercel.app/api/v1/drawings/123
```

### Update Drawing

**Endpoint:** `/drawings/:id`

**Method:** `PATCH`

**Description:** Update the data of a specific drawing by providing its ID.

**Example:**

```bash
curl -X PATCH https://blackboard-backend.vercel.app/api/v1/drawings/123 -d "updatedData=your-updated-data"
```

### Delete Drawing

**Endpoint:** `/drawings/:id`

**Method:** `DELETE`

**Description:** Delete a specific drawing by providing its ID.

**Example:**

```bash
curl -X DELETE https://blackboard-backend.vercel.app/api/v1/drawings/123
```

### Create Drawing

**Endpoint:** `/drawings/create-drawing`

**Method:** `POST`

**Description:** Create a new drawing and insert it into the database.
