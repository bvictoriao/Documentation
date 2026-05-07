---
title: Sequence diagram бронирования
description: Последовательность шагов при создании брони столика
---

# Sequence diagram бронирования

Диаграмма отражает процесс бронирования от действия пользователя до ответа внешней системы ресторана.

```plantuml
@startuml
actor Пользователь as User
participant "Фронтенд" as UI
participant "Бэкенд" as Backend
database "База данных" as DB
participant "Внешняя система\nресторана" as RestaurantAPI
participant "Почтовый\nсервис" as Email

User -> UI : Выбирает столик, дату и время\nНажимает "Забронировать"
UI -> Backend : POST /api/bookings

Backend -> DB : Проверить активные брони\n(пользователь, ресторан, время)
activate DB
DB --> Backend : Результат проверки
deactivate DB

alt Активная бронь уже существует
    Backend -> UI : Ошибка: бронь уже есть
    UI -> User : Показать сообщение\n"У вас уже есть бронь\nна это время"

else Активной брони нет
    Backend -> RestaurantAPI : Запрос на создание брони
    activate RestaurantAPI

    alt Успешное бронирование
        RestaurantAPI --> Backend : Успех (номер брони)
        deactivate RestaurantAPI

        Backend -> DB : Сохранить бронь
        activate DB
        DB --> Backend : Сохранено
        deactivate DB

        Backend -> UI : Ответ: бронь создана
        UI -> User : Показать сообщение\n"Столик забронирован!"

        Backend -> Email : Отправить подтверждение
        activate Email
        Email --> Backend : Отправлено
        deactivate Email

    else Столик занят
        RestaurantAPI --> Backend : Ошибка: столик занят
        deactivate RestaurantAPI

        Backend -> UI : Ответ: ошибка (столик занят)
        UI -> User : Показать сообщение\n"Столик занят. Выберите другое время"

    else Внешняя система не отвечает
        RestaurantAPI --> Backend : Ошибка (таймаут)
        deactivate RestaurantAPI

        Backend -> UI : Ответ: ошибка (сервис недоступен)
        UI -> User : Показать сообщение\n"Ресторан временно недоступен.\nПопробуйте позже"
    end
end

@enduml
```

## Краткое описание

- Пользователь отправляет запрос на бронирование через фронтенд.
- Бэкенд сначала проверяет в БД, нет ли активной брони на то же время.
- Если дубля нет, бэкенд обращается во внешнюю систему ресторана и при успехе сохраняет бронь.
- После успешного сохранения пользователь получает подтверждение, а почтовый сервис отправляет уведомление.
- В случае занятости столика или таймаута внешней системы пользователю возвращается понятная ошибка.
