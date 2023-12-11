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




getDataFromBackend = async() =>{
    try{
        const res = await fetch('http://localhost:3000/reservation');
        const data = await res.json();
        console.log(data)
    } catch (error){
        alert(error);
    }
};
getDataFromBackend();

async function createReservation(){
    const select_car = document.getElementById("car-names").value;
    const total = parseInt(document.getElementById("total").innerText);
    const pickup_location = document.getElementById("pickupLocation").value;
    const pickup_dateString = document.getElementById("pickupDate").value;
    const pickup_date = new Date(pickup_dateString);
    const return_dateString = document.getElementById("returnDate").value;
    const return_date = new Date(return_dateString);
    const name = document.getElementById("name").value;
    const phone_number = parseInt(document.getElementById("phonenumber").value);
    const email = document.getElementById("email").value;
    const address = document.getElementById("adress").value;

    try {
        await fetch('http://localhost:3000/reservation',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                select_car, 
                total, 
                pickup_location, 
                pickup_date: pickup_date.toISOString(), 
                return_date: return_date.toISOString(),
                name,
                phone_number,
                email,
                address,
            }),
        });
        alert('Reservation Success');
    } catch (error) {
        console.log(error);
        
    }
}
createReservation();



/*async function showReservation() {
    const confirmed_data = document.getElementById("confirmed-data");
    try {
      const respon = await fetch('http://localhost:3000/reservation');
      const dtlConfirmed = await respon.json();
      console.log(dtlConfirmed);
  
      const reservationContent = dtlConfirmed.map((item) => {
        return `
        <div class="detil1">
                                <p>SELECTED CAR</p>
                                <img class="img-reserv" src="./assets/Hyundai Stargazer.png" alt="poto">
                                <p>${item.select_car}</p>
                                <h1>Rp : ${item.total}</h1>
                            </div>
                            <div class="detil2">
                                <p>NAME : ${item.name}</p>
                                <P>PHONE NUMBER : ${item.phone_number}</P>
                                <p>EMAIL : ${item.email}</p>
                                <P>ADDRESS : ${item.address}</P>
                                <hr>
                                <p>PICKUP LOCATION : ${item.pickup_location}</p>
                                <p>PICKUP DATE : ${item.pickup_date}</p>
                                <p>RETURN DATE : ${item.return_date}</p>
                                <div class="button-step2">
                                    <div class="btn-form-step2">
                                        <button class="btn-step2" id="btn2back">BACK</button>
                                    </div>
                                    <div class="btn-form-step2">
                                        <button class="btn-step2" id="btn2next">CONFIRM</button>
                                        
                                    </div>
                                </div>
                            </div>
       `;
    });

    confirmed_data.innerHTML = reservationContent;
  } catch (error) {
    console.log(error);
  }
}
showReservation();*/
async function showReservation() {
    const confirmed_data = document.getElementById("confirmed-data");
    try {
        const respon = await fetch('http://localhost:3000/reservation');
        const dtlConfirmed = await respon.json();
        console.log(dtlConfirmed);

        dtlConfirmed.sort((a, b) => b.id - a.id);

        // Ambil data terbaru dari array
        
        // Ambil data terakhir dari array
        const latestReservation = dtlConfirmed[0];

        const reservationContent = `
            <div class="detil1">
                <p>SELECTED CAR</p>
                <img class="img-reserv" src="./assets/Hyundai Stargazer.png" alt="poto">
                <p>${latestReservation.select_car}</p>
                <h1>Rp : ${latestReservation.total}</h1>
            </div>
            <div class="detil2">
                <p>NAME : ${latestReservation.name}</p>
                <P>PHONE NUMBER : ${latestReservation.phone_number}</P>
                <p>EMAIL : ${latestReservation.email}</p>
                <P>ADDRESS : ${latestReservation.address}</P>
                <hr>
                <p>PICKUP LOCATION : ${latestReservation.pickup_location}</p>
                <p>PICKUP DATE : ${latestReservation.pickup_date}</p>
                <p>RETURN DATE : ${latestReservation.return_date}</p>
                <div class="button-step2">
                    
                </div>
            </div>`;

        confirmed_data.innerHTML = reservationContent;
    } catch (error) {
        console.log(error);
    }
}
showReservation();

async function showCar() {
    const ourCar = document.getElementById("kolom-mobil");
    try {
        const response = await fetch('http://localhost:3000/car');
        const dataCars = await response.json();
        
        // Loop melalui setiap mobil dan tambahkan ke dalam "kolom-mobil"
        dataCars.forEach(car => {
            const carElement = document.createElement('div');
            carElement.classList.add('kolom-mobil');

            carElement.innerHTML = `
                <div>
                    <img class="gambar-car" src="${car.img_car}" alt="${car.name_car}">
                </div>
                <div class="merk">
                    <h1>${car.name_car}</h1>
                    <div class="spec">
                        <div class="ketentuan">
                            <p>POWER</p>
                            <p>SEATS</p>
                            <P>TRANSMISSION</p>
                            <p>COLOR</p>
                        </div>
                        <div class="spesifikasi">
                            <p>: ${car.power}</p>
                            <p>: ${car.seat}</p>
                            <P>: ${car.transsmision}</p>
                            <p>: ${car.color}</p>
                        </div>
                    </div>
                    <div class="price-rent">
                        <p>Rp ${car.price}/Day</p>
                    </div>
                </div>
            `;

            ourCar.appendChild(carElement);
        });
    } catch (error) {
        console.log(error);
    }
}

// Panggil fungsi showCar untuk menampilkan data mobil
showCar();
