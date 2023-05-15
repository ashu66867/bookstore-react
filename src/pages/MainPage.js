import React from "react";
import { useSelector } from 'react-redux';

import Book from '../components/Book';

function MainPage() {
  const { books } = useSelector((store) => store.cart);

  // Filtering books by genre
  const allBooks = [...books];
  const thrillerBooks = allBooks.filter((item) => item.genre.includes("thriller"));
  const historyBooks = allBooks.filter((item) => item.genre.includes("history"));
  const kidsBooks = allBooks.filter((item) => item.genre.includes("kids"));
  const fictionBooks = allBooks.filter((item) => item.genre.includes("fiction"));
  const biographyBooks = allBooks.filter((item) => item.genre.includes("biography"));
  const selfHelpBooks = allBooks.filter((item) => (item.genre.includes("selfhelp") || item.genre.includes("motivation")));


  return (
    <div className="container-fluid mt-5 p-3">

      <div className="row p-3 justify-content-center bg-light">
        <div className="row p-2 justify-content-center">
          <div className="w-100 text-center">
            <h5>Thriller Books</h5>
          </div>
          <div className="row p-2 justify-content-center">
            {
              thrillerBooks.map((book) => {
                return (<Book data-testid="bookCard" key={book._id} {...book} />)
              })
            }
          </div>
        </div>
      </div>

      <div className="row p-3 justify-content-center bg-light">
        <div className="row p-2 justify-content-center">
          <div className="w-100 text-center">
            <h5>Motivation & Self-Help books</h5>
          </div>
          <div className="row p-2 justify-content-center">
            {
              selfHelpBooks.map((book) => {
                return (<Book key={book._id} {...book} />)
              })
            }
          </div>
        </div>
      </div>

      <div className="row p-3 justify-content-center bg-light">
        <div className="row p-2 justify-content-center">
          <div className="w-100 text-center">
            <h5>Biography books</h5>
          </div>
          <div className="row p-2 justify-content-center">
            {
              biographyBooks.map((book) => {
                return (<Book key={book._id} {...book} />)
              })
            }
          </div>
        </div>
      </div>
      
      <div className="row p-3 justify-content-center bg-light">
        <div className="row p-2 justify-content-center">
          <div className="w-100 text-center">
            <h5>History books</h5>
          </div>
          <div className="row p-2 justify-content-center">
            {
              historyBooks.map((book) => {
                return (<Book key={book._id} {...book} />)
              })
            }
          </div>
        </div>
      </div>

      <div className="row p-3 justify-content-center bg-light">
        <div className="row p-2 justify-content-center">
          <div className="w-100 text-center">
            <h5>Kids books</h5>
          </div>
          <div className="row p-2 justify-content-center">
            {
              kidsBooks.map((book) => {
                return (<Book key={book._id} {...book} />)
              })
            }
          </div>
        </div>
      </div>

      <div className="row p-3 justify-content-center bg-light">
        <div className="row p-2 justify-content-center">
          <div className="w-100 text-center">
            <h5>Fiction books</h5>
          </div>
          <div className="row p-2 justify-content-center">
            {
              fictionBooks.map((book) => {
                return (<Book key={book._id} {...book} />)
              })
            }
          </div>
        </div>
      </div>


    </div>

  );
}

export default MainPage