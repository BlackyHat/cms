'use client';

import { ModelColumn, columns } from './columns';
import Heading from '@/components/heading';
import ApiList from '@/components/ui/api-list';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

interface ModelsClientProps {
  data: ModelColumn[];
}

const ModelsClient: React.FC<ModelsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between gap-x-1">
        <Heading
          title={`Models (${data.length})`}
          description="Manage models for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/models/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
      <Heading title="API" description="API calls for Models" />
      <Separator />
      <ApiList entityName="models" entityIdName="modelId" />
    </>
  );
};

export default ModelsClient;
