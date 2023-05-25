[try it](https://bogdanq.github.io/diplom/)

# Диплом

- Главная страница
  -- Поиск
  -- Каталог товаров
  -- Фильтр
  -- Пагинации
  -- Карусели
  -- Галерея
- Карточка товара
- Корзина
- Избранное
- Кабинет (История заказов, личная инфа)
- Вход
- Регистрация
- Обзоры (low)
- Новости (low)
- админ
  -- редактирование юзеров
  -- редактирование товаров

# BD

# Товары

```ts
type Product = {
  id: string;
  name: string;
  description: string;
  img: string;
  type:
    | "tables"
    | "other"
    | "kitchen"
    | "print"
    | "material"
    | "table"
    | "closet";
  price: number;
  params: {
    width: number;
    height: number;
    material: number;
    weight: number;
  };
};
```

# Отзывы

```ts
type Comment = {
  id: string;
  productId: string;
  userEmail: string;
  description: string;
};
```

# Корзина

```ts
type Cart = {
  email: string;
  products: [
    {
      productId: string;
      count: number;
    }
  ];
};
```

# Избранное

```ts
type Cart = {
  email: string;
  products: [
    {
      productId: string;
      productType: string;
      count: number;
    }
  ];
};
```

# Пользователи

```ts
type User = {
  email: string;
  name: string;
  password: string;
  phone: string;
};
```

# Новости

# Баннеры

# Популярные товары


<img width="1680" alt="image" src="https://github.com/bogdanq/diplom/assets/43848668/a2939475-6381-4ef1-b993-e4ce3909aa10">
<img width="1393" alt="image" src="https://github.com/bogdanq/diplom/assets/43848668/88032e27-640c-4946-8d22-e2aa4b117d56">

