# Документация проекта «Онлайн-бронирование столиков»

## О проекте

Сервис помогает пользователям находить рестораны по предпочтениям (кухня, цена, расположение, заполненность) и бронировать столики онлайн. Рестораны получают готовую систему бронирования и дополнительный поток гостей.

- [Бизнес-требования (проблема, аудитория, цели, риски)](./restaurant-documentation/docs/concept/business-requirements.md)
- [Границы MVP и план развития](./restaurant-documentation/docs/concept/boundaries.md)
---

## Навигация по артефактам системного анализа

### Требования и стейкхолдеры

| Артефакт | Описание |
|----------|----------|
| [Сбор требований](./restaurant-documentation/docs/concept/requirements-gathering.md) | Классификация стейкхолдеров, матрица RACI для функционала бронирования, вопросы для интервью |
| [Функциональные требования](./restaurant-documentation/docs/functional-requirements/use-cases.md) | Описание функциональных требований в формате Use Case |
| [Нефункциональные требования](./restaurant-documentation/docs/non-functional-requirements/nfr.md) | Описание нефункциональных требований и приоритезация на основе фрейм ворка MoSCoW |


### Модели и спецификации

| Артефакт | Описание |
|----------|----------|
| [BPMN диаграмма](./restaurant-documentation/docs/concept/bpmn.md) | Основной и альтернативные потоки онлайн-бронирования (UC-004). Включена синхронная проверка API ресторана, резервирование, сохранение в БД, асинхронное уведомление. |
| [Use Case диаграмма](./restaurant-documentation/docs/scenarios/use-case.md) | Диаграмма показывает роли пользователей и ключевые сценарии в сервисе бронирования столиков. |
| [Sequence диаграмма](./restaurant-documentation/docs/scenarios/sequence-diagram.md) | Диаграмма отражает процесс бронирования столиков. |
| [Макет интерфейса](./restaurant-documentation/docs/concept/ui-mockup.md) | Ссылка на интерактивный макет в Unidraw, скриншоты экранов и описание источников данных. |
| [API](./restaurant-documentation/docs/api/error-codes.md) | Cпецификация OpenAPI. |
| [База данных](./restaurant-documentation/docs/concept/database.md) | Сущности (`User`, `Restaurant`, `Table`, `Booking`, `RestaurantRegistration`), атрибуты, объёмы данных, паттерны доступа, выбор реляционной СУБД + Object Storage для фото. |
| [ERD](./restaurant-documentation/docs/db/erd.md) | ERD диаграмма, описание сущностей. |
| [Асинхронное взаимодействие](./restaurant-documentation/docs/concept/async-interaction.md) | Обоснование выбора RabbitMQ для отправки нотификаций (email/SMS) после успешного бронирования. |
| [Платформизация](./restaurant-documentation/docs/concept/platformization.md) | Использование готовых решений (Яндекс.Карты, Unisender, OAuth, Яндекс.Метрика). Стратегия B2B2C и монетизация (подписка, комиссия, премиум, плата за API). |

