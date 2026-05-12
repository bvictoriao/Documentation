---
title: Макет интерфейса
description: Ссылка на интерактивный макет интерфейса приложения
sidebar_position: 6
---

# Макет интерфейса

Ссылка на макет интерфейса: [Unidraw Board](https://unidraw.io/app/board/2a934f3994d01dfdf447?allow_guest=true)

### Экран интерфейса

![Скриншот интерфейса](/img/screen1.png)


### Источники данных

|Endpoint|Данные|
|-|-|
|`GET /api/v1/user/header`|`{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/123.jpg" }`|
|`GET /api/v1/restaurants`<br/>`?search=итальянская`<br/>`&type=ресторан`<br/>`&cuisine=итальянская`<br/>`&rating=4.5`<br/>`&priceMin=1000`<br/>`&priceMax=3000`<br/>`&kidsMenu=true`|Вернет массив объектов (ресторанов), которые удовлетворяют строке поиска или фильтрам:<br/>`{ "items": [ { "id": 123, "name": "Итальянский дворик", "photo": "https://example.com/photo1.jpg", "cuisine": ["итальянская", "европейская"], "averageCheck": 2500, "rating": 4.5 } ], "total": 42, "page": 1, "limit": 10 }`|
|Кнопка "Выбрать" - переход на страницу ресторана|`/restaurants/{id}`|


### Экран интерфейса

![Скриншот интерфейса](/img/screen2.png)

### Источники данных

| endpoint | данные |
|-|-|
| `GET /api/v1/user/header` | `{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/123.jpg" }` |
| `GET /api/v1/restaurants/{id}` | `{ "id": 123, "name": "Итальянский дворик", "rating": 4.5, "cuisine": ["итальянская", "европейская"], "averageCheck": 2500, "address": { "city": "Москва", "street": "ул. Ленина", "building": "10" }, "workingHours": { "open": "12:00", "close": "00:00", "days": "пн-вс" }, "description": "Уютный ресторан с итальянской кухней.", "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"] }` |
| `GET /restaurants/{id}/tables` | Переход на страницу выбора столика |


### Экран интерфейса

![Скриншот интерфейса](/img/screen3.png)

### Источники данных

| endpoint | данные |
|-|-|
| `GET /api/v1/user/header` | `{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/123.jpg" }` |
| `GET /api/v1/restaurants/{id}/tables?date=2025-05-25&time=19:00&guests=4` <br/> пример параметров | Возвращается массив объектов (столиков). Столики отрисовываются на интерактивной карте <br/> `[ { "number": "7", "seats": 4, "isAvailable": true, "position": { "x": 100, "y": 200 } } ]` |
| При нажатии на "Подтвердить" переходим на страницу, в параметрах данные о брони | `/booking/confirm?restaurantId={restaurantId}&tableId={tableId}&date={date}&time={time}&guests={guests}` |

### Экран интерфейса

![Скриншот интерфейса](/img/screen4.png)

### Источники данных

| endpoint | данные |
|-|-|
| `GET /api/v1/user/header` | `{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/123.jpg" }` |
| `/booking/confirm?restaurantId=123&tableId=12&date=2025-05-25&time=19:00&guests=4` | Данные о брони берутся из параметров URL |
| Чекбокс «Я согласен с правилами» – локальное состояние, проверяется перед отправкой. Если не согласен – кнопка неактивна. | |
| `POST /api/v1/bookings` <br/> При нажатии на кнопку "Забронировать" создается бронь. <br/> При нажатии на кнопку "Отмена" возврат к предыдущему экрану `/restaurants/{id}/tables` | |

### Экран интерфейса

![Скриншот интерфейса](/img/screen5.png)

### Источники данных

| endpoint | данные |
|-|-|
| `GET /api/v1/user/header` | `{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/567.jpg" }` |
| `GET /api/v1/user/bookings?status=active` <br/> параметр для отображения активных броней | Возвращается массив объектов (брони) <br/> `[{ "id": 123, "restaurant": { "name": "Итальянский дворик" }, "table": { "number": "7" }, "guests": 4, "date": "2025-05-25", "time": "19:00", "status": "confirmed" }]` |
| При нажатии на кнопку "Отменить" <br/> `DELETE /api/v1/bookings/{id}` | |

### Экран интерфейса

![Скриншот интерфейса](/img/screen6.png)

### Источники данных

| endpoint | данные |
|-|-|
| `GET /api/v1/user/header` | `{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/567.jpg" }` |
| При нажатии "Список броней" <br/> `GET /api/v1/admin/restaurant/bookings` <br/><br/> При нажатии "Профиль" <br/> `GET /api/v1/admin/restaurant/profile` | данные на макете вкладок |

### Экран интерфейса

![Скриншот интерфейса](/img/screen7.png)

### Источники данных

| endpoint | данные |
|-|-|
| `GET /api/v1/user/header` | `{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/567.jpg" }` |
| `GET /api/v1/admin/restaurant/bookings?date=2025-05-25&status=confirmed` <br/> параметры, чтобы отфильтровать брони | Возвращается массив объектов (брони) <br/> `{ "items": [ { "id": 123, "date": "2025-05-25", "time": "19:00", "guests": 4, "table": { "number": "7" }, "status": "confirmed" } ], "total": 42, "page": 1, "limit": 20 }` |

### Экран интерфейса

![Скриншот интерфейса](/img/screen8.png)

### Источники данных

| endpoint | данные |
|-|-|
| `GET /api/v1/user/header` | `{ "avatarUrl": "https://booking.restaurants.ru/uploads/avatars/567.jpg" }` |
| `GET /api/v1/admin/restaurant/profile` | `{ "name": "Итальянский дворик", "cuisine": ["итальянская", "европейская"], "averageCheck": 2500, "address": { "city": "Москва", "street": "ул. Ленина", "building": "10" }, "workingHours": { "open": "12:00", "close": "00:00", "days": "пн-вс" }, "description": "Уютный ресторан с итальянской кухней.", "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg", "https://example.com/photo3.jpg"] }` |
| `PUT /api/v1/admin/restaurant/profile` <br/> После нажатия на кнопку "Сохранить". | |