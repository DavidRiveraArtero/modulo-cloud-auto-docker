import * as React from 'react';
import { AppLayout, CenteredLayout } from '#/layouts';
import { RickCollectionContainer } from '#/pods/rick-collection';
export const RickCollectionScene = () => (
  <>
    <AppLayout>
        <RickCollectionContainer />
    </AppLayout>
  </>
);
