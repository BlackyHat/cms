import BodyTypeClient from './components/client';
import { BodyTypeColumn } from './components/columns';
import prismadb from '@/lib/prismadb';
import { format } from 'date-fns';

const BodyTypesPage = async ({ params }: { params: { storeId: string } }) => {
  const bodyTypes = await prismadb.bodyType.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: 'desc' },
  });

  const formattedBodyTypes: BodyTypeColumn[] = bodyTypes.map(
    ({ id, label, imageUrl, createdAt }) => ({
      id,
      label,
      imageUrl,
      createdAt: format(createdAt, 'MMMM do, yyyy'),
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-0">
        <BodyTypeClient data={formattedBodyTypes} />
      </div>
    </div>
  );
};

export default BodyTypesPage;