 
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

  


