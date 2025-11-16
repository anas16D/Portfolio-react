import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Blog from './Blog';
import BlogsList from './BlogsList';
import NewBlog from './NewBlog';

export default function BlogsController() {
  return (
    <>
    <>hi</>
      <Routes>
        <Route path="/" element={<BlogsList />} />
        <Route path=":id/" element={<Blog />} />
        <Route path="new/" element={<NewBlog />} />
      </Routes>
    </>
  );
}
