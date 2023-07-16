[![Tests](https://github.com/KindofShuga/react-mesto-api-full-gha/actions/workflows/tests.yml/badge.svg)](https://github.com/KindofShuga/react-mesto-api-full-gha/actions/workflows/tests.yml)
# Проект Mesto
## `Сайт приостановлен.`
Репозиторий для проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями:
- Авторизация и регистрация пользователей.
- Подтягивание карточек других пользователей.
- Создание, удаление своих карточек.
- Редактирование профиля: имени, био, аватара.
- Возможность лайкать карточки.
- Защищены роуты с приложением - для просмотра требуется авторизация.
- Реализованы модальные окна при ошибках сервера / некорректно введённых данных / успешной регистрации.
- Запоминание состояния авторизации / данных профиля пользователя.
___

### :wrench: __Технологии:__
[![Технологии](https://skillicons.dev/icons?i=html,css,webpack,react,js,git,figma,nodejs,express,nginx,mongodb)](https://skillicons.dev)  
- [`Yandex.Cloud`](https://cloud.yandex.ru/services/compute) — Виртуальная машина.
- `Ubuntu` — ОС.
- `pm2` — Менеджер процессов на сервере.
- `LetsencryptSSL` — Сертификаты от Letsencrypt
- `Mongoose` — Библиотека для работы с БД.
- `ESlint` — Библиотека-линтер, анализирует код на ошибки.

___

### :open_file_folder: __Директории:__
- | Фронтенд | Описание |
  |:------|:---------|
  | ***`/frontend/src/components`*** | React-компоненты |
  | ***`/frontend/src/components/App.js`*** | основной функционал на React |
  | ***`/images`*** | изображения проекта |
  | ***`/vendor`*** | файлы сторонних разработчиков |
  | ***`/utils`*** | запросы к API |

- | Бекенд | Описание |
  |:------|:---------|
  | ***`/backend/controllers`*** | контроллеры пользователя и карточки. |
  | ***`/errors`*** | кастомные ошибки. |
  | ***`/middlewares`*** | функции промежуточной обработки. |
  | ***`/models`*** | описания схем пользователя и карточки. |
  | ***`/routes`*** | файлы с маршрутами приложения. |

____

### :arrow_up_small: __Версии зависимостей:__
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "react-scripts": "5.0.1",

    "bcrypt": "^5.1.0",
    "celebrate": "^15.0.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-winston": "^4.2.0",
    "helmet": "^6.0.1",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.9.2",
    "validator": "^13.9.0",
    "winston": "^3.8.2"
    
    "devDependencies":
    "eslint": "^8.35.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-import": "^2.27.5",
    "jest": "^29.5.0",
    "nodemon": "^2.0.20"

____

## :link: Ссылки:

IP 158.160.17.189  
Frontend https://mesto.alinat.nomoredomains.work  
Backend https://api.mesto.alinat.nomoredomains.work
