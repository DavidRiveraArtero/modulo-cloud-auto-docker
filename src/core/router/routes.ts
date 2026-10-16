import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  rickCollection: string;
  rickCharacter:string
  createRick: string;
  editRick: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  rickCollection: '/rick',
  rickCharacter: '/rick/:id',
  createRick: '/hotels/create',
  editRick: '/hotels/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editRick' | 'rickCharacter'> {
  editRick: NavigationFunction;
  rickCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editRick: (id) => generatePath(switchRoutes.editRick, { id }),
  rickCharacter: (id) => generatePath(switchRoutes.rickCharacter, {id})
};
