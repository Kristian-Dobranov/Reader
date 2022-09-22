// Book Covers
import book1__cover from "../Images/can't_hurt_me.jpg";
import book2__cover from "../Images/The Way of the Superior Man_.jpg";
import book3__cover from "../Images/The 10X Rule.jpg";
import book4__cover from "../Images/Sell Or Be Sold.jpg";

// Feautured Books Array
const FeauturedBooks = [
  {
    cover: book1__cover,
    title: "Can't hurt me",
    author: "David Goggins",
    price: 29.0,
  },

  {
    cover: book2__cover,
    title: "The Way of the Superior Man",
    author: "David Deida",
    price: 12.9,
  },

  {
    cover: book3__cover,
    title: "The 10X Rule",
    author: "Grant Cardone",
    price: 32.0,
  },

  {
    cover: book4__cover,
    title: "Sell Or Be Sold",
    author: "Grant Cardone",
    price: 70.0,
  },
];

function Books() {
  return (
    <div className="featured__books--container">
      {/* Section Title */}
      <h1 className="books__title">
        <span className="text--black">Featured</span> Books
      </h1>
      {/*Books Container*/}
      <div className="books__container">
        {/*Calling the Array with .map() function.*/}
        {FeauturedBooks.map(function (book) {
          return (
            //Books Section
            <section className="books">
              {/* Books*/}
              <div className="book">
                {/* Book Cover */}
                <figure className="book__cover">
                  <a href=""><img src={book.cover} alt="book__cover" /></a>
                </figure>
                {/* Book Title */}
                <div className="book__title">
                  <a href="">{book.title}</a>
                </div>
                {/* Book Rating */}
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                {/* Book Price*/}
                <div className="book_price">${book.price.toFixed(2)}</div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
