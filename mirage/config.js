export default function () {
  this.namespace = '/api';

  this.get('/users', function () {
    return {
      data: [{
        firstName: "Edzio",
        lastName: "Pedzio",
        address: "New York",
        image: "https://picsum.photos/200/300/?random",
        role: 'ADM'
      }, {
        firstName: "Edzio",
        lastName: "Pedzio",
        address: "New York",
        image: "https://picsum.photos/200/300/?random",
        role: 'MGR'
      }]
    };
  });
}