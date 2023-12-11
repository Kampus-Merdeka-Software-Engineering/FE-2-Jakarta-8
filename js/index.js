getDataFromBackend = async() =>{
    try{
        const res = await fetch('http://localhost:3000/car');
        const data = await res.json();
        console.log(data)
    } catch (error){
        alert(error);
    }
};
getDataFromBackend();




$(document).ready(function() {
    $("#btn-show").on("click", function() {
        // Get form data
        const selectedCar = $("#car-names").val();
        const pickupLocation = $("#pickupLocation").val();
        const pickupDate = $("#pickupDate").val();
        const returnDate = $("#returnDate").val();

        // You can add more validation if needed

        // Prepare data for submission
        const formData = {
            car: selectedCar,
            location: pickupLocation,
            pickupDate: pickupDate,
            returnDate: returnDate
        };

        // Send data to the server using AJAX (assumes the server endpoint is "/submit")
        $.ajax({
            type: "POST",
            url: "http:localhost:3000/reservation", // Change this to your server endpoint
            data: formData,
            success: function(response) {
                // Handle success (e.g., show a success message)
                console.log("Form submitted successfully:", response);
            },
            error: function(error) {
                // Handle error (e.g., show an error message)
                console.error("Error submitting form:", error);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the server endpoint (replace '/api/cars' with your actual endpoint)
    fetch('/api/cars')
        .then(response => response.json())
        .then(data => {
            // Process the data and populate the HTML
            const carListContainer = document.getElementById('carListContainer');

            data.forEach(car => {
                const carElement = document.createElement('div');
                carElement.classList.add('jenis-mobil');

                carElement.innerHTML = `
                    <div>
                        <img class="gambar-car" src="${car.image}" alt="${car.name}">
                    </div>
                    <div class="merk">
                        <h1>${car.name}</h1>
                        <div class="spec">
                            <div class="ketentuan">
                                <p>POWER</p>
                                <p>SEATS</p>
                                <P>TRANSMISSON</p>
                                <p>COLOR</p>
                            </div>
                            <div class="spesifikasi">
                                <p>: ${car.power}</p>
                                <p>: ${car.seats} kursi</p>
                                <P>: ${car.transmission}</p>
                                <p>: ${car.color.join(', ')}</p>
                            </div>
                        </div>
                        <div class="price-rent">
                            <p>Rp ${car.price}/Day </p>
                            <a href="${car.rentLink}">
                                <button class="click-rent">
                                    RENT THIS CAR
                                </button>
                            </a>
                        </div>
                    </div>
                `;

                carListContainer.appendChild(carElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
