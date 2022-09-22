import React from "react";


// Books Array
const DiscountBook = [];

function DiscountBooks(){
    return(
        <div className="DiscountBooks">
            {DiscountBook.map(function (book) {
            return (
             <div></div>
            );
          })}
        </div>
    );
}

export default DiscountBooks;
