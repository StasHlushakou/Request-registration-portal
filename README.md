# Портал учета заявок

 ## Сценарии:
- [X] Пользователь может зарегистрироваться
- [X] Пользователь может залогиниться
- [X] Пользователь может добавить заявку (поля: Тема, Описание)
- [X] Пользователь может видеть список СВОИХ заявок (отображаемые в списке поля: Дата добавления, Тема) и возможно открыть содержимое конкретной заявки (поля: Дата добавления, Тема, Описание)
- [X] Пользователь может удалить свои заявки.
- [X] Пользователь может разлогиниться.

 ## Нефункциональные требования:
- [X] логика по получению/изменению заявок изолирована в сервисах.
- [X] текстовые сообщение на UI переводимы через файл ресурсов.
- [X] используется UI router (либо аналоги)
- [X] т.к. backend нет, сохранять все данные в local storage (включая данные о зарегистрированных пользователях)
- [X] валидация полей при регистрации, логине, создании заявки (правила: не пустое, max-length, валидация email адреса) и подсветка полей. Запрет сохранения некорректной формы.
- [ ] использовать webpack для сборки

 ## Доп. требование со * (опционально):
- [ ] минификация css/js файлов
- [ ] использование sass/less (компиляция в webpack)
- [X] использование любой открытой темы (а-ля bootstrap) для ускорения верстки.
- [X] получение данных с публичных Rest API (например отображении в уголке курса НБРБ на тек. день).
- [X] успользование элементов date-picker, autocomplete в проекте
- [ ] использование Promise.
- [X] использовать окно подтверждения, при удалении заявки.


```
ng extract-i18n --output-path src/locale

Build and run ru-bundle: 
set true at angular.json projects.purchaseapp.architect.build.options.localize
run build
build start

Build and run en-bundle:
set false at angular.json projects.purchaseapp.architect.build.options.localize
run build-en
build start-en
```

