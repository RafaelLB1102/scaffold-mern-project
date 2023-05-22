import React from "react";
import { Routes, Route } from "react-router-dom";
import { map } from "lodash";
import {
  Auth,
  Users,
  Home,
  Services,
  Categories,
  Clients,
  Menu,
} from "../pages/admin";
import { AdminLayout } from "../layouts";

const user = null;
export const AdminRouter = () => {
  const paths = ["/admin", "/admin/home"];
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<Auth/>} />
      ) : (
        <>
          {map(paths, (path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Home)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
          <Route
            path="/admin/services"
            element={loadLayout(AdminLayout, Services)}
          />
          <Route
            path="/admin/categories"
            element={loadLayout(AdminLayout, Categories)}
          />
          <Route
            path="/admin/clients"
            element={loadLayout(AdminLayout, Clients)}
          />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
        </>
      )}
    </Routes>
  );
};
