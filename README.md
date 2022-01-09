## Component lifecycles

- Життєві цикли компонентів (Component lifecycles)

  - Workflow компоненту
  - Види життєвих циклів

    - componentDidMount()

    - componentDidUpdate(prevProps, prevState)

    - componentWillUnmount()

    - componentDidCatch(error, info)

  - Як працювати з методами життєвого циклу?

- Додаємо новий функціонал
  - Рендер новин з localstorage (componentDidMount)
  - Записувати новину в localstorage при створенні (componentDidUpdate)
  - Редагування новин
  - Видалення новин
  - Перед видаленням новини відкривати модальне вікно з підтвердженням; додати закриття на ESC (componentDidMount, componentWillUnmount)
