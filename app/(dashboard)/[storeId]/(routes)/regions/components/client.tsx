'use client';

import { RegionColumn, columns } from './columns';
import Heading from '@/components/heading';
import ApiList from '@/components/ui/api-list';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';


interface RegionsClientProps {
  data: RegionColumn[];
}

const RegionsClient: React.FC<RegionsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between gap-x-1">
        <Heading
          title={`Regions (${data.length})`}
          description="Manage regions for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/regions/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for Regions" />
      <Separator />
      <ApiList entityName="regions" entityIdName="regionId" />
    </>
  );
};

export default RegionsClient;