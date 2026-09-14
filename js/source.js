var hotel = {
    name: 'Park',
    roomRate: 240, // Amount in dollars
    discount: 15,  // Percentage discount
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
};


var hotelName, roomRate, specialRate;                   

// TODO: Use either the traditional or modern DOM selector methods to retrieve
// the HTML elements with the following IDs: hotelName, roomRate, and specialRate.
// Assign each element to its corresponding JavaScript variable.



// TODO: Use the three JavaScript variables to update the text content of
// their corresponding HTML elements using information from the hotel object.
// NOTE: Two variables will be assigned text values directly, while the
// third variable will use a JavaScript function to generate its value.



// TODO: Use either the traditional or modern DOM selector methods to retrieve
// the HTML element with the ID: offerEnds.
// Then, replace its text with the following hard-coded message:
// "Offer expires next Monday (September 21, 2026)"



