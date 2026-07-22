import officeImage from "./office.jpg";

function App() {

  const offices = [

    {
      name: "RMZ Infinity",
      rent: 55000,
      address: "Chennai"
    },

    {
      name: "DLF Cyber City",
      rent: 75000,
      address: "Bangalore"
    },

    {
      name: "Tidel Park",
      rent: 45000,
      address: "Chennai"
    },

    {
      name: "World Trade Center",
      rent: 90000,
      address: "Hyderabad"
    }

  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental Application</h1>

      <img
        src={officeImage}
        alt="Office"
        width="500"
        height="300"
      />

      <hr />

      {

        offices.map((office, index) => (

          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "20px",
              padding: "15px",
              borderRadius: "10px"
            }}
          >

            <h2>{office.name}</h2>

            <p>

              <b>Address :</b>

              {office.address}

            </p>

            <p>

              <b>Rent :</b>

              <span

                style={{

                  color:
                    office.rent < 60000
                      ? "red"
                      : "green",

                  fontWeight: "bold"

                }}

              >

                ₹{office.rent}

              </span>

            </p>

          </div>

        ))

      }

    </div>

  );

}

export default App;