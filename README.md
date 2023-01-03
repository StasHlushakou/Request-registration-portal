# Портал учета заявок

 ## Сценарии:
- [ ] Пользователь может зарегистрироваться
- [ ] Пользователь может залогиниться
- [ ] Пользователь может добавить заявку (поля: Тема, Описание)
- [ ] Пользователь может видеть список СВОИХ заявок (отображаемые в списке поля: Дата добавления, Тема) и возможно открыть содержимое конкретной заявки (поля: Дата добавления, Тема, Описание)
- [ ] Пользователь может удалить свои заявки.
- [ ] Пользователь может разлогиниться.

 ## Нефункциональные требования:
- [ ] логика по получению/изменению заявок изолирована в сервисах.
- [ ] текстовые сообщение на UI переводимы через файл ресурсов.
- [ ] используется UI router (либо аналоги)
- [X] ~~т.к. backend нет, сохранять все данные в local storage (включая данные о зарегистрированных пользователях)~~
- [ ] валидация полей при регистрации, логине, создании заявки (правила: не пустое, max-length, валидация email адреса) и подсветка полей. Запрет сохранения некорректной формы.
- [X] ~~использовать webpack для сборки~~

 ## Доп. требование со * (опционально):
- [ ] минификация css/js файлов
- [ ] использование sass/less (компиляция в webpack)
- [ ] использование любой открытой темы (а-ля bootstrap) для ускорения верстки.
- [ ] получение данных с публичных Rest API (например отображении в уголке курса НБРБ на тек. день).
- [ ] успользование элементов date-picker, autocomplete в проекте
- [ ] использование Promise.
- [ ] использовать окно подтверждения, при удалении заявки.

 ## Добавить бэк:
- [ ] Аутентификации, авторизация пользователей.
- [ ] База данных в качестве хранилища на бэке.
- [ ] REST-api для взаимодействия фронта с бэком.
- [X] Переводы.
- [ ] Unit-тесты.
