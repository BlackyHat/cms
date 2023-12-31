import ProductForm from './components/product-form';
import prismadb from '@/lib/prismadb';

const ProductsPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: {
        select: {
          url: true,
        },
        orderBy: {
          position: 'asc',
        },
      },
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  const bodyTypes = await prismadb.bodyType.findMany({
    orderBy: { label: 'desc' },
  });
  const makes = await prismadb.make.findMany({
    include: { models: { orderBy: { label: 'asc' } } },
    orderBy: { label: 'asc' },
  });
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: { name: 'asc' },
  });
  const regions = await prismadb.region.findMany({
    include: { cities: { orderBy: { name: 'asc' } } },
    orderBy: {
      updatedAt: 'asc',
    },
  });

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="flex-1 space-y-4 p-8 pt-0">
        <ProductForm
          initialData={product}
          categories={categories}
          bodyTypes={bodyTypes}
          makes={makes}
          colors={colors}
          regions={regions}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
