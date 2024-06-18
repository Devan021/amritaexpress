document.getElementById('service-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const hostel = document.getElementById('hostel').value;
    const room_no = document.getElementById('room_no').value;
    const service_type = document.getElementById('service_type').value;
    const items = document.getElementById('items').value;
    const amount = document.getElementById('amount').value;
  
    const token = localStorage.getItem('token');
    const response = await fetch('/api/student/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': tok+en
      },
      body: JSON.stringify({ hostel, room_no, service_type, items, amount })
    });
  
    const data = await response.json();
    if (response.ok) {
      alert('Order created successfully');
    } else {
      alert(data.msg);
    }
  });
  