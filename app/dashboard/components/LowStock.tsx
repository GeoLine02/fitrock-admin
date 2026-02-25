export default function LowStock() {
  const lowStockProducts = [
    { id: 1, name: "25 Kilo Dumbell", stock: 5 },
    { id: 2, name: "10 Kilo Dumbell", stock: 3 },
    { id: 3, name: "5 Kilo Dumbell", stock: 2 },
  ];

  return (
    <div className="p-4 border-2 border-gray-200 bg-white rounded-xl shadow-lg space-y-2">
      <h1 className="text-2xl font-bold border-b border-gray-200 pb-2">
        Low Stock Products
      </h1>
      <div className="space-y-2">
        {lowStockProducts.map((product) => (
          <p key={product.id} className="font-semibold">
            ⚠️ {product.name} - Only {product.stock} left in stock!
          </p>
        ))}
      </div>
    </div>
  );
}
