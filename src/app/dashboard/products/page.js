import ProductAdmin from "@/components/dashboard/adminSections/productAdmin/ProductAdmin";

// Get Data
async function getProductData() {
  const res = await fetch(`${process.env.API_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductsPage() {
  const productsData = await getProductData();

  return (
    <div className="py-[2em]">
      <ProductAdmin productsData={productsData} />
    </div>
  );
}
