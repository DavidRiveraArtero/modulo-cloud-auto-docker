import React from 'react';
import { HashRouter, Routes, Route, Navigate,  } from 'react-router-dom';
import { switchRoutes } from './routes';
import {RickCollectionScene,RickCharacterScene } from '#/scenes';


export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>

        <Route
        path={switchRoutes.rickCollection}
        element={<RickCollectionScene />}>

        </Route>
        <Route
              path={switchRoutes.rickCharacter}
              element={<RickCharacterScene />}
        />

        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.rickCollection} />}/>

      </Routes>
    </HashRouter>
  );
};

/*
        <Route path={switchRoutes.createHotel} element={<HotelScene />} />
        <Route path={switchRoutes.editHotel} element={<HotelScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.hotelCollection} />}
        />
*/