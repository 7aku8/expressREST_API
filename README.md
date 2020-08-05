# expressREST_API
Zadanie rekrutacyjne dla firmy Crypto Voucher

## Opis
Proste REST API służące do zarządania postami

## Wykorzystane technologie
- backend => express.js
- API authorization => JWT
- database => PostgreSQL


## Uruchomienie
### Tworzenie bazy danych w konsoli psql
- ```CREATE USER psqluser WITH PASSWORD '1234';```
- ```CREATE DATABASE psqldb OWNER psqluser;```
- ```ALTER USER postgres WITH SUPERUSER;```
### Klonowanie repozytorium
- ```git clone https://github.com/JakubWolak/expressREST_API.git```
- ```cd expressREST_API```
- ```npm install```
- ```npx sequelize db:migrate```
- ```npm run start```
- Teoretycznie powinno teraz działać :D


## Wskazówki
Aby rozpocząć korzystanie z REST API należy zarejestrować konto, następnie zalogować się. Uzyskany "token" należy przekazywać jako nagłówek "Authorization" w formacie "Bearer <token>". Po ustawieniu odpowiedniego nagłówka można rozpocząć korzystanie z funkcji modyfikacji postów.

## REST API

### Konta użytkowników

#### Rejestracja
- przykładowa struktura pozytywnej odpowiedzi
```bash
{
    "success": true,
    "message": "User created successfully",
    "data": {
        "user": {
            "id": "00459d15-70e7-462e-a5ec-b8dda1403e97",
            "username": "grzegorz"
        }
    }
}
```
- przykładowa struktura negatywnej odpowiedzi
```bash
{
    "success": false
    "message": "Password is too long or empty"
}
```

##### POST /api/register
- tworzy nowego użytkownika
- struktura zapytania
```bash
{
    "username": "grzegorzbrzeczyszczykiewicz",
    "password": "password"
}
```
- Argumenty:
- username : string, 1 - 100 znakow,
- password : string, 9 - 100 znakow

#### Logowanie
- przykładowa struktura pozytywnej odpowiedzi
```bash
{
    "success": true,
    "message": "You are logged in",
    "token": "eyJhbGciOiJIUzI1NiJ9.Z3J6ZWdvcnox.GfHgMuTTJcGmzV5II3AV0rz46V5sJ_Xn03iZ_d_0uK4"
}
```
- przykładowa struktura negatywnej odpowiedzi
```bash
{
    "success": false,
    "message": "Password is too short"
}
```

##### POST /api/login
- loguje zarejestrowanego użytkownika i zwraca token
- struktura zapytania
```bash
{
    "username": "grzegorzbrzeczyszczykiewicz",
    "password": "password"
}
```
- Argumenty:
- username : string, 1 - 100 znakow,
- password : string, 9 - 100 znakow


### Posty

#### Dodawanie Postów
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
    "message": "Invalid post's ID given"
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
 "content": "" // string, 0 < length < 1000, required
}
```

#### PATCH /api/posts/{id}
edytuje post o podanym ID
- przyładowa struktura zapytania
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
 
