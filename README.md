# expressREST_API
Zadanie rekrutacyjne dla firmy Crypto Voucher

## Opis
Proste REST API służące do zarządania postami

## Wykorzystane technologie
- backend => express.js
- API authorization => JWT
- database => PostgreSQL

## Creating DB
- ```CREATE USER psqlUser WITH PASSWORD 'passowrd'; ```
- ```CREATE DATABASE OWNER psqlUser; ```

## REST API
### Posty
- przykładowa struktura pozywytnej odpowiedzi
```bash
{
    "success": true,
    "message": "Posts have been found succesfully",
    "data": {
        "posts": [
            {
                "id": "eeb67523-892f-4df0-839c-1bf3cc4487e7",
                "title": "edytowany tytul",
                "lead": "sga",
                "content": "asdfashgasdhgasd",
                "createdAt": "2020-08-04",
                "updatedAt": "2020-08-04"
            }
```
- przykładowa struktura negatywnej odpowiedzi
```bash
{
    "success": false,
    "message": "Invalid post's ID given",
    "status_code": 401,
    "data": {}
}
```

#### GET /api/posts
zwraca wszystkie posty zapisane w bazie

#### GET /api/posts/{id}
zwraca pojedynczy post o podanym ID

#### POST /api/posts
dodaje kolejny post do bazy
- struktura zapytania
```bash
{
 "title": "", // string, 0 < length < 100, required
 "lead": "", // string, 0 < length < 100, required
 "content": "" // string, 0 < length < 100, required
}
```

#### PATCH /api/posts/{id}
edytuje post o podanym ID
*przyładowa struktura zapytania
```bash
{
 "title": "", // string, 0 < length < 100, required
 "lead": "", // string, 0 < length < 100, required
}
```
zapytanie może zawierać jedną lub więcej wartości

#### DELETE /api/posts
usuwa wszystkie dodane posty

#### DELETE /api/posts/{id}
usuwa post o podanym ID
 
