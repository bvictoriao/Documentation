---
title: Модель данных
sidebar_position: 1
description: ERD-диаграмма и описание сущностей системы бронирования столиков
---

# Модель данных

## Обзор

Модель строится вокруг основных сущностей:
- **Restaurant** (Ресторан)
- **Table** (Столик)  
- **User** (Пользователь)
- **Booking** (Бронь)


## Справочник сущностей

### Основные сущности

| Сущность | Описание |
|----------|----------|
| **Restaurant** | Хранит данные о ресторане |
| **Table** | Хранит данные о столиках в ресторане |
| **User** | Хранит данные о пользователях системы |
| **Booking** | Хранит данные о бронях |

### Справочники

| Сущность | Описание |
|----------|----------|
| **RestaurantType** | Хранит данные о типе ресторана (кафе, бар, ресторан) |
| **TableFeature** | Хранит данные о характеристиках столика (у окна, VIP) |
| **Cuisine** | Хранит данные о кухне ресторана (итальянская, японская) |
| **RestaurantFeature** | Хранит данные о характеристиках ресторана (караоке, живая музыка, бесплатная парковка) |
| **BookingStatus** | Хранит данные о статусе брони |

### Профили пользователей

| Сущность | Описание |
|----------|----------|
| **ClientProfile** | Хранит данные, которые есть только у пользователей в роли клиента платформы |
| **RestaurantAdminProfile** | Хранит данные, которые есть только у пользователей в роли администратора ресторана |
| **AdminProfile** | Хранит данные, которые есть только у пользователей в роли администратора платформы |

### Связующие сущности

| Сущность | Описание |
|----------|----------|
| **RestaurantRegistration** | Хранит данные о заявке ресторана на регистрацию в платформе |
| **FavoriteRestaurant** | Хранит данные об любимых ресторанах пользователей |

## ERD-диаграмма

```plantuml
@startuml

title Концептуальная модель - Приложение для бронирования столиков

entity "Restaurant" as restaurant
entity "RestaurantRegistration" as registration
entity "RestaurantType" as restType
entity "Table" as table
entity "TableFeature" as tablefeature 
entity "Booking" as booking
entity "FavoriteRestaurant" as favorite
entity "User" as user
entity "ClientProfile" as client
entity "RestaurantAdminProfile" as restadmin
entity "AdminProfile" as admin
entity "BookingStatus" as status
entity "Cuisine" as cuisine 
entity "RestaurantFeature" as restfeature 

user |o--|| admin
user |o--|| restadmin
user |o--|| client 
restaurant ||--o{ table
restaurant ||--{ registration
restaurant ||--|{ restadmin
restaurant }o--|| restType
restaurant }|--o{ cuisine
restaurant }o--|{ restfeature
user ||--o{ favorite
restaurant ||--o{ favorite
user ||--o{ booking
table ||--o{ booking
table }o--|{ tablefeature
booking }o--|| status

@enduml



