(function check() {
    let name = "";
    for (let i = 0; i < 5; i++) {
        name += "*"
        console.log(name);
    }
}());


async function fetchUSer(params) {
    try {
        const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAAsovQEAAAAAKbds0bXO1H60RZe3VQLuzRDdtOs%3D2FMhNGLBPInpo5rFQ2lUcBlRBIPhGhL6GBQiVADl93u29xgneI';
        const res = await fetch('https://api.twitter.com/2/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json'
            }
        });

        // Check if the response is successful
        if (!res.ok) {
            console.log(res)
            const errorText = await res.text(); // Read the response as text
            throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorText}`);
        }

        // Attempt to parse the JSON response
        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.error('Error fetching user:', error);
    }
}
fetchUSer();