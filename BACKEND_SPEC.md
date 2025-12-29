# Backend API Specification & Technical Design

**Status**: Draft
**Version**: 1.0.0
**Target**: Golang Backend Integration

## 1. Overview
This document outlines the API contract and data models required for the UtangHub backend service. The backend will be implemented in **Go (Golang)** to provide a robust, concurrent, and high-performance API.

### Tech Stack Recommendation
*   **Language**: Go (latest)
*   **Framework**: Go Fiber (Express-inspired, high performance)
*   **Database**: PostgreSQL
*   **ORM**: GORM or sqlc
*   **Migration**: golang-migrate (Database versioning & migration)
*   **Auth**: JWT (JSON Web Tokens)

---

## 2. Database Schema Design (PostgreSQL)

### Users Table (`users`)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Unique User ID |
| `username` | VARCHAR(50) | UNIQUE, NOT NULL | Login username |
| `password_hash` | VARCHAR(255) | NOT NULL | Bcrypt hash |
| `full_name` | VARCHAR(100) | NOT NULL | Display name |
| `created_at` | TIMESTAMPTZ | Default: NOW() | |

### Spaces Table (`spaces`)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Unique Space ID |
| `name` | VARCHAR(100) | NOT NULL | Space Name (e.g., "Trip Bali") |
| `owner_id` | UUID | FK(users.id), NOT NULL | Creator of the space |
| `created_at` | TIMESTAMPTZ | Default: NOW() | |

### Space Members Table (`space_members`)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Member ID (Scoped to Space) |
| `space_id` | UUID | FK(spaces.id), NOT NULL | Belongs to Space |
| `user_id` | UUID | FK(users.id), NULLABLE | Link to registered user (if "This is Me") |
| `name` | VARCHAR(100) | NOT NULL | Display Name in Space |
| `joined_at` | TIMESTAMPTZ | Default: NOW() | |

> **Note**: `user_id` is nullable. If null, it's a "virtual" member added by someone else. If set, it links to a real user account.

### Transactions Table (`transactions`)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Unique Transaction ID |
| `space_id` | UUID | FK(spaces.id), NOT NULL | Partition key |
| `from_member_id` | UUID | FK(space_members.id), NOT NULL | Debtor (Who owes) |
| `to_member_id` | UUID | FK(space_members.id), NOT NULL | Creditor (Who is owed) |
| `amount` | DECIMAL(15,2) | NOT NULL | Transaction Value |
| `note` | TEXT | NULLABLE | Description |
| `transaction_date` | TIMESTAMPTZ | Default: NOW() | |

---

## 3. API Contract

**Base URL**: `/api/v1`

### Authentication
#### Login
*   **POST** `/auth/login`
*   **Request**:
    ```json
    {
      "username": "user1",
      "password": "password123"
    }
    ```
*   **Response**: `200 OK`
    ```json
    {
      "token": "ey..."
    }
    ```

#### Register
*   **POST** `/auth/register`
*   **Request**:
    ```json
    {
      "username": "user1",
      "password": "password123",
      "fullName": "User One"
    }
    ```
    > Note: Should validate CAPTCHA token/answer here.

### Dashboard
#### Get Dashboard Summary
*   **GET** `/dashboard`
*   **Headers**: `Authorization: Bearer <token>`
*   **Response**: `200 OK`
    ```json
    {
      "summary": {
        "totalOwe": 150000,
        "totalOwed": 50000
      },
      "oweList": [
        { "id": "tx1", "name": "Budi", "amount": 50000, "date": "..." }
      ],
      "owedList": [
        { "id": "tx2", "name": "Citra", "amount": 25000, "date": "..." }
      ]
    }
    ```

### Spaces
#### Get All Spaces
*   **GET** `/spaces`
*   **Headers**: `Authorization: Bearer <token>`
*   **Response**: `200 OK`
    ```json
    [
      {
        "id": "uuid",
        "name": "Trip Bali",
        "createdAt": "...",
        "memberCount": 5
      }
    ]
    ```

#### Create Space
*   **POST** `/spaces`
*   **Request**: `{ "name": "New Space" }`

#### Get Space Detail
*   **GET** `/spaces/:id`
*   **Response**: `200 OK`
    ```json
    {
      "id": "uuid",
      "name": "Trip Bali",
      "createdAt": "...",
      "members": [
        { "id": "m1", "name": "Andi", "userId": "u1" }
      ],
      "transactions": [
        { "id": "t1", "fromId": "m1", "toId": "m2", "amount": 50000 }
      ]
    }
    ```

#### Add Member to Space
*   **POST** `/spaces/:id/members`
*   **Request**:
    ```json
    {
      "name": "New Member Name",
      "id": "optional-custom-id" // Used for "This is Me" feature
    }
    ```

#### Add Transaction
*   **POST** `/spaces/:id/transactions`
*   **Request**:
    ```json
    {
      "fromId": "m1",
      "toId": "m2",
      "amount": 50000,
      "note": "Lunch"
    }
    ```
