module.exports = `
    """
    The Dish represents the single item on the menu
    """
    type Dish {
        """
        The unique ID of the dish
        """
        id: ID!
        """
        The name of the dish
        """
        name: String!
        """
        The price of the dish
        """
        price: Float!
    }

    """
    The Menu represents the categorized dishes available in the restaurant
    """
    type Menu {
        """
        The starter category dishes
        """
        starters: [Dish!]!
        """
        The main category dishes
        """
        mains: [Dish!]!
        """
        The dessert category dishes
        """
        desserts: [Dish!]!
    }

    type Query {
        """
        The query to get the restaurant menu.
        """
        menu: Menu!
    }
`;
