import RegionForm from './components/region-form';
import prismadb from '@/lib/prismadb';

const RegionsPage = async ({ params }: { params: { regionId: string } }) => {
  const region = await prismadb.region.findUnique({
    where: {
      id: params.regionId,
    },
  });
  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <RegionForm initialData={region} />
      </div>
    </div>
  );
};

export default RegionsPage;
