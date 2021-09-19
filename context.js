import React, { Component, useContext, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const CoursesContext = React.createContext();

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([{ title: 'Intro to C++' }]);
  const data = [courses, setCourses];

  return (
    <CoursesContext.Provider value={data}> {children} </CoursesContext.Provider>
  );
};

function Content() {
  const [courses, setCourses] = useContext(CoursesContext);

  return (
    <div>
      <h1> List of Courses </h1>

      <button
        onClick={() => {
          setCourses([...courses, { title: 'intro to Golang' }]);
        }}
      >
        {' '}
        Add Course{' '}
      </button>

      {courses &&
        courses.map((course, index) => {
          return (
            <h3 key={index}>
              {' '}
              {index}: {course.title}{' '}
            </h3>
          );
        })}
    </div>
  );
}

export default function App() {
  return (
    <CoursesProvider>
      <Content />
    </CoursesProvider>
  );
}
