# Портал учета заявок

 ## Сценарии:
- [x] Пользователь может зарегистрироваться
- [x] Пользователь может залогиниться
- [x] Пользователь может добавить заявку (поля: Тема, Описание)
- [x] Пользователь может видеть список СВОИХ заявок (отображаемые в списке поля: Дата добавления, Тема) и возможно открыть содержимое конкретной заявки (поля: Дата добавления, Тема, Описание)
- [x] Пользователь может удалить свои заявки.
- [x] Пользователь может разлогиниться.

 ## Нефункциональные требования:
- [x] логика по получению/изменению заявок изолирована в сервисах.
- [x] текстовые сообщение на UI переводимы через файл ресурсов.
- [x] используется UI router (либо аналоги)
- [x] валидация полей при регистрации, логине, создании заявки (правила: не пустое, max-length, валидация email адреса) и подсветка полей. Запрет сохранения некорректной формы.
- [ ] использовать webpack для сборки

 ## Доп. требование со * (опционально):
- [ ] минификация css/js файлов
- [ ] использование sass/less (компиляция в webpack)
- [x] использование любой открытой темы (а-ля bootstrap) для ускорения верстки.
- [ ] получение данных с публичных Rest API (например отображении в уголке курса НБРБ на тек. день).
- [ ] использование элементов date-picker, autocomplete в проекте
- [ ] использование Promise.
- [ ] использовать окно подтверждения, при удалении заявки.

 ## Добавить бэк:
- [x] Аутентификации, авторизация пользователей.
- [x] База данных в качестве хранилища на бэке.
- [x] REST-api для взаимодействия фронта с бэком.
- [ ] Переводы.
- [X] Unit-тесты.
- [ ] Добавить обработку ошибок в запросах на бэкенд и их обработку на фронтенде.


 first migration
 cd ...\Request-registration-portal\src\Infrastructure\RequestPortal.Persistence>dotnet ef migrations add init -s ..\..\Presentation\RequestPortal.Api\RequestPortal.Api.csproj
 cd ...\Request-registration-portal\src\Infrastructure\RequestPortal.Persistence>dotnet ef migrations add init -s ..\..\Presentation\RequestPortal.Api\RequestPortal.Api.csproj