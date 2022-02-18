const cart = {
    userId: { type: String, required: true },
    products: [
        {
          productId: {
            type: String,
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
};