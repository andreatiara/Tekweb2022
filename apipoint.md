# API POINTS



## ABOUT

### Menampilkan about user
```
GET: /about

response:
[
  {
    "id"        : "",
    "gender"    : "",
    "age"       : "",
    "city"      : "",
    "religion"  : "",
    "email"     : "",
    "status"    : "",
    "country"   : "",
    "photo"     : ""
  },
  {
    ...
  }
]
```
### Menampilkan about user berdasarkan ```id```
```
GET: /about/[id]

response:
{
    "id"        : "",
    "gender"    : "",
    "age"       : "",
    "city"      : "",
    "religion"  : "",
    "email"     : "",
    "status"    : "",
    "country"   : "",
    "photo"     : ""
}
```
### Menambahkan biodata user
```
POST: /about

data:
{
    "gender"    : "",
    "age"       : "",
    "city"      : "",
    "religion"  : "",
    "email"     : "",
    "status"    : "",
    "country"   : "",
    "photo"     : ""
}

response:
true    //if true
false   //if false
```
### Mengubah about user
```
PUT: /about

data:
{
    "gender"    : "",
    "age"       : "",
    "city"      : "",
    "religion"  : "",
    "email"     : "",
    "status"    : "",
    "country"   : "",
    "photo"     : ""
}

response:
true    //if true
false   //if false
```
### Menghapus about user
```
DELETE: /about/[id]

response:
true    //if true
false   //if false
```
## ARTIKEL
### Menampilkan seluruh artikel
```
GET: /artikel

response:
[
  {
    "id"          : "",
    "title"       : "",
    "author"      : "",
    "thumbnail"   : "",
    "content"     : "",
    "markdown"    : ""
  },
  {
    ...
  }
]
```
### Menampilkan artikel berdasarkan ```id```
```
GET: /artikel/[id]

response:
{
    "id"          : "",
    "title"       : "",
    "author"      : "",
    "thumbnail"   : "",
    "content"     : "",
    "markdown"    : ""
}
```
### Menambahkan artikel
```
POST: /artikel

data:
{
    "title"       : "",
    "author"      : "",
    "thumbnail"   : "",
    "content"     : "",
    "markdown"    : ""
}

response:
true    //if true
false   //if false
```
### Mengubah artikel
```
PUT: /artikel

data:
{
    "title"       : "",
    "author"      : "",
    "thumbnail"   : "",
    "content"     : "",
    "markdown"    : ""
}

response:
true    //if true
false   //if false
```
### Menghapus artikel
```
DELETE: /artikel

response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/andreatiara/Tekweb2022/main/images/dbdesignn.png)
