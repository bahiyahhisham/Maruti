// Car data
const cars = [
    {
      name: "Swift",
      price: "₹6.49 Lakh*",
      image: "/maruti_images/swift.jpeg"
    },
    {
      name: "Baleno",
      price: "₹6.66 Lakh*",
      image: "/maruti_images/baleno.jpeg"
    },
    {
      name: "Brezza",
      price: "₹8.29 Lakh*",
      image: "/maruti_images/brezza1.jpeg"
    }
  ];
  
  // Render car cards
  const carList = document.getElementById("carList");
  
  cars.forEach(car => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${car.image}" class="card-img-top" alt="${car.name}">
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <p class="card-text">Starting at ${car.price}</p>
          <a href="#booking" class="btn btn-primary">Book Now</a>
        </div>
      </div>
    `;
    carList.appendChild(card);
  });
  
  // Handle booking form submission
  const bookingForm = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");
  
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your test drive request has been received.";
    bookingForm.reset();
  });