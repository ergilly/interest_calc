class RequestHelper{

  constructor() {
    
  }

  post(payload) {
    return fetch('http://localhost:3000/api/results/compound', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json());
  }
}

export default RequestHelper;
