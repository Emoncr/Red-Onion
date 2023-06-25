const data = [
    {
        "food_id": "pancakes",
        "food_name": "Pancakes",
        "food_description": "Fluffy pancakes served with maple syrup.",
        "price": 12.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f3cc769641346385f97e.png",
        "category": "breakfast"
    },
    {
        "food_id": "eggs_benedict",
        "food_name": "Eggs Benedict",
        "food_description": "Poached eggs on an English muffin with hollandaise sauce.",
        "price": 10.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f3cc4e07382f609e7d31.png",
        "category": "breakfast"
    },
    {
        "food_id": "fruit_parfait",
        "food_name": "Fruit Parfait",
        "food_description": "Layers of yogurt, granola, and fresh fruits.",
        "price": 8.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f3cc769641001385f97f.png",
        "category": "breakfast"
    },
    {
        "food_id": "omelette",
        "food_name": "Omelette",
        "food_description": "Fluffy eggs cooked with a variety of fillings such as cheese, vegetables, and meats.",
        "price": 11.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f3ccdbd89a15c54e9829.png",
        "category": "breakfast"
    },
    {
        "food_id": "avocado_toast",
        "food_name": "Avocado Toast",
        "food_description": "Toasted bread topped with mashed avocado, seasoned with salt, pepper, and other optional ingredients.",
        "price": 7.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f3ccdbd89a15c54e9829.png",
        "category": "breakfast"
    },
    {
        "food_id": "waffles",
        "food_name": "Waffles",
        "food_description": "Crispy and fluffy waffles served with butter and syrup.",
        "price": 9.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f3cd76964162f285f980.png",
        "category": "breakfast"
    },
    {
        "food_id": "chicken_caesar_salad",
        "food_name": "Chicken Caesar Salad",
        "food_description": "Grilled chicken, romaine lettuce, croutons, and Caesar dressing.",
        "price": 14.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f580769641329e85fa9f.png",
        "category": "lunch"
    },
    {
        "food_id": "club_sandwich",
        "food_name": "Club Sandwich",
        "food_description": "Triple-decker sandwich with turkey, bacon, lettuce, and tomato.",
        "price": 13.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f5804e0738167c9e7e10.png",
        "category": "lunch"
    },
    {
        "food_id": "vegetable_wrap",
        "food_name": "Vegetable Wrap",
        "food_description": "Assorted fresh vegetables wrapped in a tortilla.",
        "price": 11.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f580dbd89a33444e98f8.png",
        "category": "lunch"
    },
    {
        "food_id": "caprese_salad",
        "food_name": "Caprese Salad",
        "food_description": "Tomatoes, mozzarella cheese, and fresh basil drizzled with balsamic glaze.",
        "price": 12.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f580769641766f85faa0.png",
        "category": "lunch"
    },
    {
        "food_id": "grilled_chicken_sandwich",
        "food_name": "Grilled Chicken Sandwich",
        "food_description": "Grilled chicken breast served on a bun with lettuce, tomato, and mayonnaise.",
        "price": 11.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f580dbd89a148b4e98fa.png",
        "category": "lunch"
    },
    {
        "food_id": "mediterranean_salad",
        "food_name": "Mediterranean Salad",
        "food_description": "Fresh mixed greens, cucumbers, tomatoes, olives, feta cheese, and vinaigrette dressing.",
        "price": 10.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f580dbd89a82ac4e98f9.png",
        "category": "lunch"
    },
    {
        "food_id": "grilled_salmon",
        "food_name": "Grilled Salmon",
        "food_description": "Freshly grilled salmon served with lemon butter sauce.",
        "price": 18.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f50ddbd89aea2d4e98a5.png",
        "category": "dinner"
    },
    {
        "food_id": "filet_mignon",
        "food_name": "Filet Mignon",
        "food_description": "Tender beef filet cooked to perfection.",
        "price": 19.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f50d769641be2b85f9f3.png",
        "category": "dinner"
    },
    {
        "food_id": "vegetable_stir_fry",
        "food_name": "Vegetable Stir-Fry",
        "food_description": "Assorted vegetables stir-fried in a savory sauce.",
        "price": 15.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f50d769641047985f9f2.png",
        "category": "dinner"
    },
    {
        "food_id": "lobster_tail",
        "food_name": "Lobster Tail",
        "food_description": "Grilled lobster tail served with melted butter.",
        "price":23.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f50d4e0738bbe09e7dae.png",
        "category": "dinner"
    },
    {
        "food_id": "beef_tenderloin",
        "food_name": "Beef Tenderloin",
        "food_description": "Tender beef tenderloin cooked to your liking.",
        "price": 26.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f50ddbd89a2d314e98a4.png",
        "category": "dinner"
    },
    {
        "food_id": "vegetarian_paella",
        "food_name": "Vegetarian Paella",
        "food_description": "A flavorful rice dish with a mix of vegetables, saffron, and spices.",
        "price": 17.99,
        "photo_url": "https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/6490f50ddbd89a2da94e98a6.png",
        "category": "dinner"
    }
]


export default data